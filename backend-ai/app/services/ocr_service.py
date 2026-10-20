import easyocr
import re

# In a production environment, you might only initialize this once
# as it loads models into memory.
reader = easyocr.Reader(['en'], gpu=False) # Set gpu=True if running on GPU instance

def extract_text_from_report(image_path: str):
    """
    Extracts text from a medical lab report image using EasyOCR.
    """
    print(f"Running OCR on {image_path}...")
    # result is a list of tuples: (bbox, text, prob)
    result = reader.readtext(image_path)
    
    extracted_text = " ".join([text for _, text, _ in result])
    return extracted_text

def parse_biomarkers(extracted_text: str):
    """
    Basic regex parsing to find common biomarkers (e.g., Glucose, Cholesterol).
    In a full pipeline, this string is passed to the local LLM for structuring.
    """
    biomarkers = {}
    
    # Simple regex to find "Glucose 105" or "Cholesterol: 180"
    glucose_match = re.search(r'Glucose[:\s]+(\d+)', extracted_text, re.IGNORECASE)
    if glucose_match:
        biomarkers['Glucose'] = float(glucose_match.group(1))
        
    cholesterol_match = re.search(r'Cholesterol[:\s]+(\d+)', extracted_text, re.IGNORECASE)
    if cholesterol_match:
        biomarkers['Cholesterol'] = float(cholesterol_match.group(1))
        
    return biomarkers

# Example Usage:
# if __name__ == "__main__":
#     text = extract_text_from_report("sample_blood_test.jpg")
#     data = parse_biomarkers(text)
#     print(data)
