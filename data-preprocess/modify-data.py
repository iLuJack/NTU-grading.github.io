import pandas as pd

# Read the CSV file
df = pd.read_csv('merged-grades-standardized.csv')

# Replace empty strings and blank cells with NaN
df = df.replace(r'^\s*$', pd.NA, regex=True)

# Save the modified data back to CSV
# The index=False prevents adding a new index column
# na_rep='NaN' explicitly writes 'NaN' for missing values
df.to_csv('merged-grades-standardized-modified.csv', index=False, na_rep='NaN')

print("Conversion completed!")
