"""Crop form region into horizontal strips for inspection.

The form fields live roughly y=400..1010 in the 1224x1584 render.
Save 4 strips, each with a y-axis grid drawn every 10 px so I can read
exact pixel positions of each underline visually.
"""
import fitz

doc = fitz.open("api/template.pdf")
page = doc[0]
pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
W, H = pix.width, pix.height

# Convert pixmap to PIL via raw bytes
import struct

# Use fitz.Pixmap operations: crop & save
# crop method: clip = fitz.IRect
strips = [
    (400, 600),
    (550, 800),
    (750, 1000),
    (950, 1180),
]
for idx, (y0, y1) in enumerate(strips):
    clip = fitz.IRect(0, y0, W, y1)
    sub = fitz.Pixmap(pix, pix.x, clip)  # not always supported
    # Fallback: re-render with clip
    sub = page.get_pixmap(matrix=fitz.Matrix(2, 2), clip=fitz.Rect(0, y0/2, W/2, y1/2))
    sub.save(f"api/strip_{idx}_{y0}-{y1}.png")
    print(f"strip {idx}: y={y0}..{y1}  image=api/strip_{idx}_{y0}-{y1}.png  ({sub.width}x{sub.height})")
