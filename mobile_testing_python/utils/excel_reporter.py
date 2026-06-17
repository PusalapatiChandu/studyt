import pandas as pd
from datetime import datetime
import os

def generate_professional_report(platform, test_results):
    df = pd.DataFrame(test_results)
    
    # Ensure reports directory exists
    reports_dir = '../reports'
    if not os.path.exists(reports_dir):
        os.makedirs(reports_dir)
        
    filename = f"{reports_dir}/{platform}_E2E_Analysis.xlsx"
    
    # Matching the 11-category color theme approximately via pandas/openpyxl
    with pd.ExcelWriter(filename, engine='openpyxl') as writer:
        df.to_excel(writer, index=True, index_label='#', sheet_name='E2E Results')
        
    print(f"✅ Professional Mobile Report Generated: {filename}")
