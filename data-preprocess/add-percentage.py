import pandas as pd

# Read the CSV file
df = pd.read_csv('../data-simplified.csv')

# Define the percentage columns
percentage_columns = ['A+比例', 'A比例', 'A-比例', 'B+比例', 'B比例', 'B-比例', 'C+比例', 'C比例', 'C-比例', 'F比例']

# Add '%' to non-empty values in percentage columns
for col in percentage_columns:
    # Only modify non-null values
    df[col] = df[col].apply(lambda x: f"{x}%" if pd.notnull(x) else x)

# Save the modified dataframe back to CSV
df.to_csv('data-simplified-with-percentage.csv', index=False)
