import React, { Component } from "react";
import UploadOption from "./UploadOption";
import  {UpperBoxUploadButton, UpperBoxUploadIcon} from "./StyledComponent";


class UploadOptionButton extends Component {
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
        <UpperBoxUploadButton onClick={this.openModal}>
          <UpperBoxUploadIcon />
        </UpperBoxUploadButton>
        <UploadOption isOpen = {this.state.isModalOpen} close = {this.closeModal} />
      </>
    );
  }
}

export default UploadOptionButton;