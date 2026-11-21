from flask import Flask, request
import json
from pathlib import Path

sanakirja = Path(__file__).resolve().parent

json_polku = sanakirja / "dictionary.json"

with open(json_polku, "r", encoding="UTF-8") as file:
    dictionary = json.load(file)

app = Flask(__name__)

@app.route("/translate/<word>")

def translator(word):
    if word == "words":
        return list(dictionary.keys())
    
    elif word in dictionary:
        kaanna = dictionary[word]
        return kaanna    
    else:
        return "Virhe"
   
if __name__ == '__main__':
    app.run(host="127.0.0.1", port=3000, use_reloader=True)