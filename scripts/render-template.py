import fitz

doc = fitz.open("api/template.pdf")
page = doc[0]
pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
pix.save("api/template.png")
print(pix.width, pix.height)
