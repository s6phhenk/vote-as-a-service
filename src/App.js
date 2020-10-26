import React from 'react';

export default function App({children}) {
    // Gibt das Grundgerüst der App aus 
        // Kind Komponenten, die einer Eltern-Komponente übergeben werden 
        // stehen innerhalb der Elternkomponente über das property children zur Verfügung
    return (
        <div className="Background">
            <div className="Header">
                <div className="Title">
                    Vote as a Service
                </div>
            </div>
            <div className="Main">
                <div className="Container">
                    {children}
                </div>
            </div>
        </div>
    )
}