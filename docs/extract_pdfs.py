import pdfplumber
import sys

pdfs = [
    "Consignes portfolio.pdf",
    "ergonomie web-3.pdf", 
    "Grille Eval Portfolio S6.pdf"
]

for pdf_name in pdfs:
    print(f"\n{'='*80}")
    print(f"FICHIER: {pdf_name}")
    print('='*80)
    
    try:
        with pdfplumber.open(pdf_name) as pdf:
            for i, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                if text:
                    print(f"\n--- Page {i} ---\n")
                    print(text)
    except Exception as e:
        print(f"Erreur lors de la lecture de {pdf_name}: {e}")
