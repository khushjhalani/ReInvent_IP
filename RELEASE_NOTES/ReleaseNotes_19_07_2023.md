# task progress
Task completed
The notebook IdlingTime.ipynb consists of the task. The code is commented to make it understandable.
First, the ignitionOff data was extracted from the whole data and then further only elapsed data was extracted from ignitionOff.
Then it was cleaned by removing the zero value fields and epoch start time fields. Then the total idling time and its count was calcutated.
Then the timestamps were converted to epoch time format to make comparision possible.
Then stop count was counted by comparing and counting the continuing timestamps.

# Input Files

20230706153517_JOURNEY_5N1BT3CB0PC795389_20230706154047_idling1.jsonl.

# Output files

idling_details.txt
