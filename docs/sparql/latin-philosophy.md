In this example, we list 5 random `skos:Concept`s in the project [PhiloLatin](https://github.com/tonazzog/PhiloLatin).


:::form


```json params
{
  "endpoints": [
    "http://localhost:5173/Latin-Philosophical-Expression.ttl"
  ],
  "output": "table",
  "parameters": [
    {
      "variable": "word",
      "type": "string",
      "label": "",
      "placeholder": "Click on execute!"
    }
  ]
}
```

```sparql
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>

SELECT DISTINCT ?concept ?def ?expression
WHERE {
    ?concept a skos:Concept ;
        skos:definition ?def .
    ?le ontolex:evokes ?concept ;
        rdfs:label ?expression
FILTER(LANG(?expression) = "la")
} ORDER BY RAND()
LIMIT 5
```
:::form
