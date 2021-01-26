import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';

ReactGA.initialize('G-C4TJ9418BD');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));
