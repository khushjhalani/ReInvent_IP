# Task Progress
Created files "vehicle_health_fields.txt" and "" which contains all the required fields to filter data separated by a newline character
Used the script "data_extraction_script.py" and "driver_performance_fields.txt" to filter the data

# INPUT FILES 

Data File = JOURNEY_GAMMA_07072023.jsonl
File with fields to filter = vehicle_health_fields.txt & driver_performance_fields.txt

# OUTPUT FILES

driver_perf_filtered.jsonl
vehicle_health_filtered.jsonl

# Command executed

```
python .\data_extraction_script.py -d .\JOURNEY_GAMMA_07072023.jsonl -f .\driver_performance_fields.txt -o driver_perf_filtered

python .\data_extraction_script.py -d .\JOURNEY_GAMMA_07072023.jsonl -f .\vehicle_health_fields.txt -o .\vehicle_health_filtered
```