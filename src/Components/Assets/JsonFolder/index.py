import requests, json

# Set your API key
API_KEY = "YOUR API KEY"

# Set the Company Search API URL
PDL_URL = "https://api.peopledatalabs.com/v5/company/search"

# Set headers
HEADERS = {
  'Content-Type': "application/json",
  'X-api-key': API_KEY
}

# Create an Elasticsearch query
ES_QUERY = {
  "query": {
    "bool": {
      "must": [
        {"term": {"website": "google.com"}}
      ]
    }
  }
}

# Create a parameters JSON object
PARAMS = {
  'query': json.dumps(ES_QUERY),
  'size': 10,
  'pretty': True
}

# Pass the parameters object to the Company Search API
response = requests.get(
  PDL_URL,
  headers=HEADERS,
  params=PARAMS
).json()

# Check for successful response
if response["status"] == 200:
  data = response['data']
  # Write out each profile found to file
  with open("my_pdl_search.jsonl", "w") as out:
    for record in data:
      out.write(json.dumps(record) + "\n")
  print(f"Successfully grabbed {len(data)} records from PDL.")
  print(f"{response['total']} total PDL records exist matching this query.")
else:
  print("NOTE: The carrier pigeons lost motivation in flight. See error and try again.")
  print("Error:", response)