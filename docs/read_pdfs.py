"""Script pour extraire le texte des PDFs du dossier docs"""
from pypdf import PdfReader
import os
from pathlib import Path

def extract_text_from_pdf(pdf_path):
    """Extrait tout le texte d'un PDF"""
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for i, page in enumerate(reader.pages):
            text += f"\n--- Page {i+1} ---\n"
            text += page.extract_text()
        return text
    except Exception as e:
        return f"Erreur lors de la lecture de {pdf_path}: {str(e)}"

def main():
    docs_dir = Path(__file__).parent
    pdf_files = [
        "Consignes portfolio.pdf",
        "Grille Eval Portfolio S6.pdf",
        "ergonomie web-3.pdf"
    ]
    
    for pdf_file in pdf_files:
        pdf_path = docs_dir / pdf_file
        if pdf_path.exists():
            print(f"\n{'='*80}")
            print(f"FICHIER: {pdf_file}")
            print(f"{'='*80}")
            text = extract_text_from_pdf(pdf_path)
            print(text)
        else:
            print(f"Fichier non trouvé: {pdf_file}")

if __name__ == "__main__":
    main()
