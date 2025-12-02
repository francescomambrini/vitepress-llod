# Querying LiLa

A bonus for you! Here we can query the [Lila Knowledge Base](https://lila-erc.eu/). This query retrieves 200 lemmas from the KB that are:
1. formed with a given prefix (by label)
2. that (optionally) have an entry into the Latin Wordnet. The cell is blank if the lemma has no entry.

Enter one of the following labels in the "Prefix" search box and click "Execute":

```
a(b)-, ad-, am(b)(i)-, ante-, archi-, bi-, circum-, con-, contra-, de-, dis-, e(x)-, ec-, extra-, in (entering)-, in (negation)-, indu/endo/indo-, inter-, intro-, multi-, ne-, ob-, per-, por-, post-, prae-, praeter-, pro-, pseudo-, quadri-, re-, retro-, se/sed/so-, semi-, sub-, subter-, super-, tra(ns)-, tri-, ue-
```

If you want to check the results, you can search [here](https://lila-erc.eu/query/).

Remember that, in the SPARQL configuration you must point the plugin to the URL used by the SPARQL endpoint to answer programmatic requests (i.e. the endpoint that answers and addresses requests from scripts). This may or may not be the same as the address of the web-based graphical interface used by humans. In case of LiLa, for instance, the two addresses are **not** the same:

- the address of the web interface, used by humans to query the KB is: https://lila-erc.eu/sparql/
- the address for programmatic queries is: https://lila-erc.eu/sparql/lila_knowledge_base/sparql

You must use the second one!

:::form

```json params
{
  "endpoints": [
    "https://lila-erc.eu/sparql/lila_knowledge_base/sparql"
  ],
  "output": "table",
  "parameters": [
    {
      "variable": "word",
      "type": "string",
      "label": "Prefix: ",
      "placeholder": ""
    }
  ]
}
```

```sparql
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX lime: <http://www.w3.org/ns/lemon/lime#>
PREFIX ontolex: <http://www.w3.org/ns/lemon/ontolex#>
PREFIX lila: <http://lila-erc.eu/ontologies/lila/>

SELECT ?pref ?lemma ?le WHERE {
  BIND("${word}" AS ?pref)
  ?p a lila:Prefix ;
       rdfs:label ?pref .
  ?lem lila:hasPrefix ?p ;
         rdfs:label ?lemma
  OPTIONAL {
    ?le ontolex:canonicalForm ?lem ;
  		^lime:entry <http://lila-erc.eu/data/lexicalResources/LatinWordNet/Lexicon> .
  }
} limit 200
```
:::form