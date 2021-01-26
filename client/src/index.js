import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactGA.initialize('260089586');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));
