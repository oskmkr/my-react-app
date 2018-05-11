import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    buttonStyle = {
        backgroundColor: "#a6a7a8",

    };

    render() {
        return (
            <a href="#" onClick={this.props.clickHandler}>{this.getText()}</a>
        );
    }

    getText() {

        if (!this.props.text) {
            return "button";
        }

        return this.props.text;
    }

    /**
     * https://reactjs.org/docs/events.html
     * @param evt :SyntheticEvent
     */
    clickEvent(evt) {
        console.dir(evt);
    }
}

export default Button;
