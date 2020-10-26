import React from "react";

// wird immer dann dargestellt, wenn gerade eine Umfrage offen ist 
// Callback onActivate als Property 
// --> wird aufgerufen, sobald auf das composer div geklickt wird 
export default function InactiveVoteComposer({ onActivate }) {
  return (
    <div className="Row VotesRow Spacer" onClick={onActivate}>
      <h1 className="Title">
        <span className="Emphasis">
          What do <b>you</b> want to know ?
        </span>

        <div className="Badge">Add Voting</div>
      </h1>
      <p>Click here to leave your own question.</p>
    </div>
  );
}
