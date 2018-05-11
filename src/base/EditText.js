import React, { Component } from 'react';
import './EditText.css';

class EditText extends Component {

  render() {
    return (
      <div className="EditText">
        <input name={this.props.name && this.props.name} defaultValue={this.getDefaultText()}/>{this.props.children}
      </div>
    );
  }

  getDefaultText() {

      if(!this.props.defaultText) {
          return "캐릭터를 입력해주세요.";
      }

      return this.props.defaultText;
  }
}

export default EditText;
