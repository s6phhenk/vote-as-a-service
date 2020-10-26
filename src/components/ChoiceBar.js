import React from 'react';

export default function ChoiceBar ({title, percent, count, onClickHandler}) {
    // Die ChoiceBar Komponente reagiert auf das Klicken einer Auswahlmöglichkeit
    // und registriert die Klicks
    // mit Props kann von außen auf die Komponente zugegriffen werden 
    return (
         <div className="ChoiceBar" onClick={onClickHandler}>
         {/* Callback Funktion, um mit der Elternkomponente zu kommunizieren */}
             <div className="Progress" style={{ width: percent + '%'}}>
             {/* Mit dem Prop percent ändert sich die Breite der Progressbar 
             je nach Anzahl der Stimmen */}
                <div className="ChoiceBarTitle">{title}</div> 
                   {/*  */}
             </div>
            
             <div className="ChoiceBarBadge" >{count}</div>
        </div>
           
        
    )

}