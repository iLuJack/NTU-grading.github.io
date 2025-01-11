import pandas as pd

# Read the CSV file
df = pd.read_csv('merged-grades.csv')

# Convert semester format using string operations
def standardize_semester(semester):
    # Check if semester is a 4-digit number
    if isinstance(semester, str) and len(semester) == 4 and semester.isdigit():
        # Split into year (first 3 digits) and semester number (last digit)
        year = semester[:3]
        sem = semester[3]
        return f"{year}-{sem}"
    return semester

# Apply the conversion
df['學期'] = df['學期'].apply(standardize_semester)

# Save the modified dataframe back to CSV
df.to_csv('merged-grades-standardized.csv', index=False)
