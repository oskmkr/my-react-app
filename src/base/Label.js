import React, { Component } from 'react';
import './Label.css';

class Label extends Component {

  render() {
    return (
      <div className="Label">
        <p>
            {this.getText()}
        </p>
      </div>
    );
  }

  getText() {

      if(!this.props.text) {
          return "button";
      }

      return this.props.text;
  }
}

export default Label;
