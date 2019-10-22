import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Service worker for offline content
import * as serviceWorker from './common/serviceWorker';

// App
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
