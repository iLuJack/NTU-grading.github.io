import pandas as pd

# Read the CSV files
df_112 = pd.read_csv('112學年及歷年成績比例 統計表 - 1121、1122.csv')
df_111 = pd.read_csv('111學年-台大課程成績比例 - 工作表1.csv')
df_106_110 = pd.read_csv('106-110學年NTU課程成績比例 - 工作表1.csv')

# Concatenate all dataframes
merged_df = pd.concat([df_112, df_111, df_106_110], ignore_index=True)

# Clean up percentage values by removing '%' and converting to float
percentage_columns = ['A+比例', 'A比例', 'A-比例', 'B+比例', 'B比例', 'B-比例', 'C+比例', 'C比例', 'C-比例', 'F比例']

for col in percentage_columns:
    # Convert percentage strings to float values for later num-sorting 
    merged_df[col] = merged_df[col].astype(str).str.replace('%', '').str.strip()
    merged_df[col] = pd.to_numeric(merged_df[col], errors='coerce')

# Remove duplicate rows
merged_df = merged_df.drop_duplicates()

# Sort by course name and semester
merged_df = merged_df.sort_values(['課程名稱', '學期'])

# Save the merged data to a new CSV file
merged_df.to_csv('merged-grades.csv', index=False)

print("Files merged successfully! Output saved to merged-grades.csv")
