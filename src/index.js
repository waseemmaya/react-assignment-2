import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ChangeText from "./ChangeText/ChangeText"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChangeText />, document.getElementById('root'));
registerServiceWorker();
