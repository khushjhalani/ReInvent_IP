# Task Progress
Created a file "dp_and_vh_fields.txt" which contains all the required fields to filter data separated by a newline character
Used the script "data_extraction_script.py" to filter the data

# INPUT FILES 

Data File = reinv1.jsonl
File with fields to filter = dp_and_vh_fields.txt

# OUTPUT FILES

filtered_data_07072023.jsonl

# Command executed

```
python data_extraction_script.py -d JOURNEY_GAMMA_07072023.jsonl -f dp_and_vh_fields.txt -o filtered_data_07072023
```