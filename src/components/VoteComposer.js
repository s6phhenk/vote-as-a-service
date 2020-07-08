import React, { useState } from 'react';

export default function VoteComposer ({onDeactivate}) {
    const [voteTitle, setVoteTitle] = useState("");
    const [voteDescription, setVoteDescription] = useState("");
    const [choices, setChoices] = useState([""]);

    function updateChoice (choiceIndex, choiceTitle) {
        // Liste kopieren und veränderte Choice aktualisieren
        const newChoices = choices.map(
            (choice, index) => index !== choiceIndex ? choiceTitle : choice );
            // wenn die Eingabe im letzten Feld erfolgte und das Feld
            // noch leer war, eine neue Choice hinzufügen
            if (choices [choiceIndex].length === 0 
                && choiceIndex === choices.length -1 ) {
                    newChoices.push ("");
                }
                // neue Choice setzen
            setChoices(newChoices);
    }

return (
    <div className="Row VoteComposer Spacer">
        <div className="Head">
            <h1 className="Title">
                <input 
                className="Title"
                autoFocus
                name="title"
                type="text"
                placeholder="What do you want to know?"
                value={voteTitle}
                onChange={e => setVoteTitle(e.target.value) }
                />
            </h1>
                <input 
                className="Description"
                name="description"
                type="text"
                placeholder="Describe your question in one sentence here"
                value={voteDescription}
                onChange={e => setVoteDescription(e.target.value)}
                />
            <div className="ButtonBar">
                <button className="Button">Save</button>
                <button className="Button" onClick={onDeactivate}>Cancel</button>
            </div>
        </div>
    </div>
)
}