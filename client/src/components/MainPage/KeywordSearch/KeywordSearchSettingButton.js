import React, { Component } from "react";
import KeywordSearchSetting from "./KeywordSearchSetting";
import  {SearchSettingButton, SearchSettingIcon} from "../StyledComponent";

class KeywordSearchSettingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <SearchSettingButton onClick={this.openModal}>
          <SearchSettingIcon />
        </SearchSettingButton>
        <KeywordSearchSetting isOpen = {this.state.isModalOpen} close = {this.closeModal} />
      </>
    );
  }
}

export default KeywordSearchSettingButton;