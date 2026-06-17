import pandas as pd
from datetime import datetime

def generate_excel_report(test_results, platform_name):
    df = pd.DataFrame(test_results)
    filename = f"reports/{platform_name}_Analysis_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"
    
    # Add styling logic using openpyxl via pandas
    with pd.ExcelWriter(filename, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='E2E Results')
        # Here we could add more complex styling like color coding
        
    print(f"✅ Professional Excel Report generated: {filename}")
