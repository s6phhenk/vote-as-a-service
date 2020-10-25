import React from 'react';

export default function App({children}) {
    // children als parameter, 
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