import React, { useState } from "react";

// components
import VoteList from "./VoteList";
import InactiveVoteComposer from './InactiveVoteComposer';
import VoteComposer from "./VoteComposer";

// Dadurch, dass React beim Neurendern einer Komponente auch immer alle Unterkomponenten 
// erneut rendert, kann man sich sicher sein, dass die angezeigten Daten stets konsistent 
// sind, weil sie nur an einer zentralen Stelle gehalten und modifiziert werden 

//stateful controller component
// für die Verwaltung des Zustands der Anwendung verantwortlich 
// regelt welche vote gerade ausgeklappt ist und ob der voteComposer aktiv ist 
export default function VoteController({ initialVotes }) {
  const [allVotes, setAllVotes] = useState(initialVotes);
  // aktueller Wert, setter Funktion , initialer Wert 
  const [currentVoteId, setCurrentVoteId] = useState(null);
  // beim initialen Rendern soll die voteComposer Komponente inaktiv --> false sein 
  const [voteComposerActive, setVoteComposerActive] = useState(false);

    function addVote (vote) {
      setAllVotes([allVotes, vote]);
      closeVoteComposer();
    }

    // Gegenstück zu closeVoteComposer
    // 
    function openVoteComposer (vote) {
      setVoteComposerActive(true);
      unsetCurrentVote(vote.id);
    }

    // Handler, der aufgerufen wird, wenn innerhalb des VoteComposer das Ereignis eintritt,
    // dass die Komponente wieder geschlossen werden soll 
    // der Handler setzt dann im Controller den voteComposerActive Zustand wieder auf false
    function closeVoteComposer () {
      setVoteComposerActive(false);
    }

    function setCurrentVote(vote) {
      setCurrentVoteId(vote.id);
      setVoteComposerActive(false);
    }

    function unsetCurrentVote() {
      setCurrentVoteId(null);
    }

    function registerVote(vote, choice) {
      const newVotes = allVotes.map(v =>
        v.id !== vote.id
          ? v
          : {
              ...vote,
              choices: vote.choices.map(c =>
                c.id !== choice.id ? c : { ...c, count: c.count + 1 }
              )
            }
      );

      setAllVotes(newVotes);
    }

    // rendert die VoteList und den inactive / active voteComposer zum Erstellen neuer votes
  return (
    <div>
      <VoteList
        allVotes={allVotes}
        currentVoteId={currentVoteId}
        onSelectVote={setCurrentVote}
        onDismissVote={unsetCurrentVote}
        onRegisterVote={registerVote}
      />
      {voteComposerActive ? (
        // if true,..
        // Wenn der voteComposer state (true) aktiv ist, rendere den VoteComposer,
        // ansonsten rendere Inactive VoteComposer
        <VoteComposer 
          onDeactivate={closeVoteComposer} 
          onSave={addVote}
        /> ) : (
        <InactiveVoteComposer 
          onActivate={openVoteComposer}
        />
        
      )
}
    </div>
  );
}
