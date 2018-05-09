import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Label from './Label';
import Button from './Button';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App>
                    <Label/>
                    <Button/>
                </App>, document.getElementById('root'));

registerServiceWorker();
