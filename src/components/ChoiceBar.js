import React, {useState} from 'react';
import './ChoiceBar.css';

export default function ChoiceBar ({title, percent}) {

    const [count, setCount] = useState(0);

    function handleClick ()  {
        setCount(count + 1);
    }
    return (
         <div className="ChoiceBar">
             <div className="Progress" style={{ width: percent + '%'}}>
    <div className="ChoiceBarTitle">{title}</div>    
             </div>
            
    <div className="ChoiceBarBadge" onClick={handleClick}>{count}</div>
        </div>
           
        
    )

}