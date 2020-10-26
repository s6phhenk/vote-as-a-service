import React from "react";

//components
import ChoiceBar from "./ChoiceBar";

// rendert eine aufgeklappte Umfrage zum bearbeiten 
export default function VotingComponent({
  vote,
  onRegisterChoice,
  onDismissVote
}) {
  const totalVotes = vote.choices.reduce((prev, curr) => prev + curr.count, 0);
  // Bei jedem Klick wird das alte vote Objekt kopiert und verändert 
  return (
    <div className="Row VotingRow Spacer">
      <div className="Head">
        <h1 className="Title">
          {vote.title}
          <div className="Badge">{totalVotes} Votes</div>
        </h1>
        <div className="Description Emphasis">{vote.description}</div>
      </div>
      <div>
      {/* Listen mit verschiedenen ChoiceBar Komponenten und deren Properties erstellen */}
        {vote.choices.map(choice => (
          <ChoiceBar
            key={choice.id}
            title={choice.title}
            percent={choice.count * (100 / totalVotes)}
            count={choice.count}
            onClickHandler={() => onRegisterChoice(vote, choice)}
          />
        ))}
      </div>
      <div className="ButtonBar">
      {/* Cancel Button */}
        <div className="Button" onClick={onDismissVote}>
          Vote later
        </div>
      </div>
    </div>
  );
}
