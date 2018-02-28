import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Bilboteca from './Bilboteca';
import registerServiceWorker from './registerServiceWorker';
import './estiloBilboteca.css';

ReactDOM.render(
    <BrowserRouter><Bilboteca /></BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
