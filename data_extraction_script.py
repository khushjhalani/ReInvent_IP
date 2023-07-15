import json
import argparse as ap

fields = []

def get_arguments():
    parser=ap.ArgumentParser()
    parser.add_argument('-d', '--data',help='Specify the path and name of the json data file',required=True)
    parser.add_argument('-f', '--filter',help='Specify the text file with Fields to be filtered seperated by newline character',required=True)
    parser.add_argument('-o', '--output',help='Specify name of the output file without extension',default="filtered_data")
    parser.add_argument('-p', '--part',help='Specify parts of the data to filter',nargs='+')
    inputs = parser.parse_args()
    return inputs 

def filt(dic):
    global fields
    return (dic[0] in fields)

def filter_data(file_name,filter_fields,output_file,parts):
    #Append .json if extension not given
    if not (file_name.endswith(".json") or file_name.endswith(".jsonl")):
        file_name+=".json"
        
    with open(file_name,'r') as data_file:
        data = json.load(data_file) 


    #Append .txt if extension not given
    if not filter_fields.endswith(".txt"):
        filter_fields+=".txt"
        
    with open(filter_fields,'r') as file:
        global fields
        fields = file.read().splitlines()
        
    for data_part in parts:
        if type(data[data_part]) == dict:
            newDict = dict(filter(filt,data[data_part].items()))
            data[data_part] = newDict
            
        elif type(data[data_part]) == list:
            filtered_data = list()
            for dictionary in data[data_part]:
                temp = {}
                temp=dict(filter(filt,dictionary.items()))             
                filtered_data.append(temp)
                
            data[data_part] = filtered_data
        else:
            print(f"{data_part} is not suitable for filtering")
            
    
    
    with open(output_file+'.json','w') as file:
        file.write(json.dumps(data,indent=3))
    

if __name__=="__main__":
    args = get_arguments()
    filter_data(args.data,args.filter,args.output,args.part)
    