import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import VotingComponent from './components/VotingComponent';

const vote = {
  title: "How is your day?",
  description: "Tell me how you are feeling today",
  choices: [
    {
      id: "choice_1", title: "Good", count: 7
    }
    
  ]
}

ReactDOM.render(
     <App>
       <VotingComponent vote= {vote}/>
  </App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
