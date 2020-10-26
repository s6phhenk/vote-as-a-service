import React from "react";

// components
import VoteSummary from "./VoteSummary";
import VotingComponent from "./VotingComponent";

// ist für das Rendern einer Liste aller bekannten Umfragen verantwortlich 
// Votelist und deren Kindkomponenten sind zustandslos und kommunizieren nur über
// event handler mit ihren Elternkomponenten 
export default function VoteList({
  allVotes,
  currentVoteId,
  onSelectVote,
  onRegisterVote,
  onDismissVote
}) {
  return (
    <div>
    {/* entspricht die vote id der aktuellen vote id, dann render doch bitte eine neue
    votingComponent mit den folgenden properties, ansonsten
    zeige die Liste aller Umfragen an  */}
      {allVotes.map(vote =>
        vote.id === currentVoteId ? (
          <VotingComponent
            key={vote.id}
            vote={vote}
            onDismissVote={onDismissVote}
            onRegisterChoice={onRegisterVote}
          />
        ) : (
          <VoteSummary key={vote.id} vote={vote} onActivate={onSelectVote} />
        )
      )}
    </div>
  );
}
