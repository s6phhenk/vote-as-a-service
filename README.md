## Projekt: 
### Vote As a Service Web Applikation zum Erstellen von Umfragen

### Geschrieben in React.js 
```bash
# Component Aufbau:

* App
    * VoteController 
    (regelt den state)
        * VoteList 
        (rendert die hinzugefügten VoteKomponenten sowie die Zusammenfassung aller abgegebenen Votes)
            * VoteSummary
            * VotingComponent 
                * ChoiceBar
        * VoteComposer 
        (Zum hinzufügen von Kategorien)

```