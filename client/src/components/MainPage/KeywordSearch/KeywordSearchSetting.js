import React from "react";
import { 
    ModalBackground, 
    KeywordSearchSettingModal,
    ModalTitle,
    ModalCloseButton, 
    ModalContentsWrapper,
    ModalContentsTitle,
    KeywordSearchSettingCheckInput,
    KeywordSearchSettingDateBox,
    KeywordSearchSettingDateSelect,
    KeywordSearchSettingDateInput,
    ContentUploadButton,
} from "../StyledComponent";


const KeywordSearchSetting = (props) => {

  const { isOpen, close } = props;
  
  return (
    <>
      {isOpen ? ( 
        <ModalBackground>
          <KeywordSearchSettingModal>
            <ModalCloseButton onClick={close}>
              &times; 
            </ModalCloseButton>
            <ModalTitle>
              Search Option
            </ModalTitle>
            <ModalContentsWrapper>
                  <ModalContentsTitle>
                    <KeywordSearchSettingCheckInput 
                      type="radio" 
                      name="search" 
                      value="현재 script 에서만 검색" 
                    />
                    현재 script 에서만 검색
                  </ModalContentsTitle>

                  <ModalContentsTitle>
                    <KeywordSearchSettingCheckInput 
                      type="radio" 
                      name="search" 
                      value="지정 범위 내에서 검색"
                    />
                    지정 범위 내에서 검색
                  </ModalContentsTitle>
  
              <KeywordSearchSettingDateBox>
                <KeywordSearchSettingDateSelect> 
                  START
                  <KeywordSearchSettingDateInput 
                    type="date"
                    required
                  />
                </KeywordSearchSettingDateSelect>

                <KeywordSearchSettingDateSelect> 
                  END
                  <KeywordSearchSettingDateInput 
                    type="date"
                    required
                  />
                </KeywordSearchSettingDateSelect>
              </KeywordSearchSettingDateBox>
              <ContentUploadButton type="submit" value="submit">Search</ContentUploadButton>
            </ModalContentsWrapper>
          </KeywordSearchSettingModal>
        </ModalBackground>
      ) : null}
    </>
  );

};

export default KeywordSearchSetting;