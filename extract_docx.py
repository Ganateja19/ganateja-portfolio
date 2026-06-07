import zipfile
import re
import xml.etree.ElementTree as ET

def extract_docx_text(docx_path):
    try:
        # A docx file is a zip file containing XML documents.
        # The main text is stored in word/document.xml
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml')
            
        root = ET.fromstring(xml_content)
        
        # Define namespace mappings
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        # Find all paragraph elements <w:p>
        for para in root.findall('.//w:p', ns):
            # For each paragraph, find all text elements <w:t>
            text_elements = para.findall('.//w:t', ns)
            text = "".join([t.text for t in text_elements if t.text])
            if text:
                paragraphs.append(text)
            else:
                paragraphs.append("")
                
        return "\n".join(paragraphs)
    except Exception as e:
        return f"Error extracting DOCX: {e}"

if __name__ == '__main__':
    docx_path = r"C:\Users\manas\Downloads\G. Thurpati.docx"
    text = extract_docx_text(docx_path)
    # Print or save to a file
    with open("resume_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Successfully extracted resume text to resume_text.txt")
    print(text[:1000] + "...")
