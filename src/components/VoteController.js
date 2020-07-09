import React, { useState } from "react";
import VoteList from "./VoteList";
import InactiveVoteComposer from './InactiveVoteComposer';
import VoteComposer from "./VoteComposer";

export default function VoteController({ initialVotes }) {
  const [allVotes, setAllVotes] = useState(initialVotes);
  const [currentVoteId, setCurrentVoteId] = useState(null);
  const [voteComposerActive, setVoteComposerActive] = useState(false);

  function addVote (vote) {
    setAllVotes([allVotes, vote]);
    closeVoteComposer();
  }

  function openVoteComposer (vote) {
    setVoteComposerActive(true);
    unsetCurrentVote(vote.id);
  }

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
