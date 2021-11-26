import React, { Component } from "react";
import { 
    ModalBackground, 

    UploadOptionModal, 
    ModalTitle,
    ModalCloseButton, 
    ModalContentsWrapper,
    ModalContentsTitle,

    UploadOptionFileSelectBox,
    UploadOptionContentCheckBox,
    UploadOptionFileSelect,

    UploadOptionNicknameBox,
    UploadOptionNicknameInput,

    UploadOptionDateBox,
    UploadOptionDateSelect,

    ContentUploadButton,

} from "../UpperBarStyle/StyledComponent";

class UploadOption extends Component {

  render() {
    const { isOpen, close } = this.props;
    return (
      <>
        {isOpen ? ( 
          <ModalBackground>
            <UploadOptionModal>

              <ModalCloseButton onClick={close}> 
                &times;
              </ModalCloseButton>
              <ModalTitle>
                Upload Option
              </ModalTitle>
              <ModalContentsWrapper>

                <UploadOptionFileSelectBox>
                  <UploadOptionContentCheckBox>                    
                    <ModalContentsTitle>
                      File Selection
                    </ModalContentsTitle>
                    <ModalContentsTitle>
                      Streaming
                    </ModalContentsTitle>

                  </UploadOptionContentCheckBox>             
                  <UploadOptionFileSelect>      {/*FileSelection 체크박스 선택하면 활성화돼야 함*/}
                    ---------FileSelect-----------
                  </UploadOptionFileSelect>

                </UploadOptionFileSelectBox>

                <UploadOptionNicknameBox>
                  <ModalContentsTitle>
                    File Nickname
                  </ModalContentsTitle>
                  <UploadOptionNicknameInput/>
                </UploadOptionNicknameBox>

                <UploadOptionDateBox>
                  <ModalContentsTitle>
                    File Date
                  </ModalContentsTitle>
                  <UploadOptionDateSelect>    {/*DateSelect API 붙어야 함*/}
                    ----------DateSelect------------
                  </UploadOptionDateSelect>
                </UploadOptionDateBox>

              </ModalContentsWrapper>
              <ContentUploadButton type = 'button'>Upload</ContentUploadButton>
            </UploadOptionModal>
          </ModalBackground>
        ) : null}
      </>
    );
  }
}

export default UploadOption;