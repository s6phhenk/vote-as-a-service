import React from 'react';
import {fetchJson, sendJson} from '../backend';
import VoteController from './VoteController';

// übernimmt die Kommunikation mit dem Server über die fetch API

// Solange noch nicht alle Daten vom Server abgerufen wurden
function VoteLoadingIndicator ( ) {
    return (
        <div className="Row VotingRow Spacer">
            <h1 className="Title"> Votes are loading ...</h1>
        </div>
    )
}

export default function VoteListPage () {
    const [allVotes, setAllVotes] = React.useState(null);

    // Funktionskomponenten müssen seiteneffektfrei sein 
    async function loadVotes() {
        const votes = await fetchJson("/api/votes");
        setAllVotes(votes);
    }
    // Für den Fall, dass noch nicht alles fertig geladen wurde
    // returne die VoteLoadingIndicator Komponente
    if(!allVotes){
        return <VoteLoadingIndicator/>
    }
    // ansonsten returne die VoteController Komponente mit allen
    // vom server abgerufenen votes 
    return (
        <VoteController
        allVotes={allVotes}/>
    )
}
