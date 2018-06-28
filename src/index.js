import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 컴포넌트를 브라우저상에 보여주기
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
