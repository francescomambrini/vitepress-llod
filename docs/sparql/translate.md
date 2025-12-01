:::form

```json params
{
  "endpoints": [
    "https://kaiko.getalp.org/sparql"
  ],
  "output": "table",
  "parameters": [
    {
      "variable": "word",
      "type": "string",
      "label": "Word: ",
      "placeholder": "cat"
    }
  ]
}
```

```sparql
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>
PREFIX lime: <http://www.w3.org/ns/lemon/lime#>
PREFIX vartrans: <http://www.w3.org/ns/lemon/vartrans#>
PREFIX decomp: <http://www.w3.org/ns/lemon/decomp#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dbnary: <http://kaiko.getalp.org/dbnary#>

SELECT DISTINCT ?translation ?lang
WHERE {
    ?s a ontolex:LexicalEntry ;
       rdfs:label "${word}"@en .
    ?trans dbnary:isTranslationOf ?s ;
        dbnary:writtenForm ?translation .
    BIND( LANG(?translation) AS ?lang )
} LIMIT 100
```
:::form