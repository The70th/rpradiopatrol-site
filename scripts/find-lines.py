"""Detect underlines as horizontal stretches of mostly-dark pixels with
small gaps allowed. Allow gap up to 30 px (label leaders/scan dropouts).

For each row, walk x and count fraction of dark pixels in a sliding window
of width 50. If fraction > 0.4, x is "in line". Then find contiguous
in-line runs of length >= 200, and report.
"""
import fitz

doc = fitz.open("api/template.pdf")
page = doc[0]
pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
W, H = pix.width, pix.height
n = pix.n
s = pix.samples

THRESH = 240
WIN = 20
DARK_FRAC = 0.15
MIN_LEN = 200

def is_dark(x, y):
    i = (y * W + x) * n
    return ((s[i] + s[i+1] + s[i+2]) // 3) < THRESH

# Precompute dark mask row-by-row to avoid repeated indexing
results = {}
for y in range(380, 1000):
    dark = [is_dark(x, y) for x in range(W)]
    # smoothed: column-wise window count
    cum = [0] * (W + 1)
    for x in range(W):
        cum[x + 1] = cum[x] + (1 if dark[x] else 0)
    in_line = []
    for x in range(W):
        x0 = max(0, x - WIN)
        x1 = min(W, x + WIN + 1)
        cnt = cum[x1] - cum[x0]
        in_line.append(cnt / (x1 - x0) >= DARK_FRAC)
    # find runs
    runs = []
    i = 0
    while i < W:
        if in_line[i]:
            j = i
            while j < W and in_line[j]:
                j += 1
            if j - i >= MIN_LEN:
                runs.append((i, j - 1))
            i = j
        else:
            i += 1
    if runs:
        results[y] = runs

# cluster vertically
ys = sorted(results.keys())
clusters = []
cur = []
for y in ys:
    if not cur or y - cur[-1] <= 4:
        cur.append(y)
    else:
        clusters.append(cur)
        cur = [y]
if cur:
    clusters.append(cur)

for cluster in clusters:
    # pick the row in the middle of the cluster
    y_pick = cluster[len(cluster) // 2]
    runs = results[y_pick]
    runs_str = ", ".join(f"x={s_}-{e_} (len={e_-s_})" for s_, e_ in runs)
    print(f"cluster y={cluster[0]}..{cluster[-1]}, pick y={y_pick}: {runs_str}")
