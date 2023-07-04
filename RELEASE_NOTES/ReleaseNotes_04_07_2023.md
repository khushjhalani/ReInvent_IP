Created the file "data_extraction_script.py" with reworked code to make it dynamic and readable.
This python code takes three command line arguments i.e. data file(json), filter fields file(text file), and output filename(OPTIONAL)

# INPUT FILES

data file = reinv1.jsonl
filter fields file = required_fields.txt


# OUTPUT FILES

filtered_data.json

# Command executed

```
python data_extraction_script.py -d reinv.jsonl -f required_fields.txt -o filtered_data
```