import React, { Component } from 'react';
import './SearchEditText.css';
import EditText from '../base/EditText'
import Button from './../base/Button'

class SearchEditText extends Component {

  render() {
    return (
            <div>
                <EditText name="searchTextView1" defaultText="검색어를 입력해주세요.">
                    <Button text="검색" clickHandler={this.props.clickHandler}/>
                </EditText>
            </div>
    );
  }

  getDefaultText() {

      if(!this.props.defaultText) {
          return "문자를 입력해주세요.";
      }

      return this.props.defaultText;
  }
}

export default SearchEditText;
