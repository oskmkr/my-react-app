import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Label from './base/Label';
import Button from './base/Button';
import EditText from './base/EditText';
import SearchEditText from './composite/SearchEditText';
import registerServiceWorker from './registerServiceWorker';

const searchEditText = <SearchEditText/>;
const myClickBehavior = function(evt) {

    console.log('# myClickBehavior', this);
}

ReactDOM.render(<App>
                    <Label text="안녕하세요. 리액트로"/>
                    <Label text="대동 단결 해 볼까요? 너무 좋네요~"/>
                    <Button text="네"/>
                    <Button text="아니오"/>
                    <EditText name="textView1" />
                    {searchEditText}
                    <SearchEditText clickHandler={myClickBehavior.bind(this)}/>
                </App>, document.getElementById('root'));



registerServiceWorker();
