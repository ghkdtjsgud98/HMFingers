import React, { forwardRef, useState, Component } from "react";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

    UploadContentsDot,
    
    DateIcon,
    DateText,

} from "../UpperBarStyle/StyledComponent";


// const [startDate, setStartDate] = useState(new Date());

class UploadOption extends Component {

  render() {
    
    const { isOpen, close, startDate, setStartDate } = this.props;

// const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (

      //background : pink 임시지정해둠
      <DateText onClick={onClick} ref={ref}>      
        {value}
      </DateText>     
    ));


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
                      <input type="checkbox" />
                      File Selection
                      <input type="checkbox" />
                      Streaming
                    </ModalContentsTitle>
                  </UploadOptionContentCheckBox>   


                  <UploadOptionFileSelect>        {/*FileSelection 체크박스 선택하면 활성화돼야 함*/}

                    {/* multipart/form-data : 인코딩하지 않음, 파일이나 이미지를 서버로 전송할 때 주로 사용 */}
                    <form method="post" enctype="multipart/form-data">

                      {/* <input type="file" onChange={(e) => {onFileUpload(e)}} /> */}
                      <input type="file"  />
                    </form>
                  </UploadOptionFileSelect>

                </UploadOptionFileSelectBox>

                <UploadOptionNicknameBox>
                  <ModalContentsTitle>
                    <UploadContentsDot />
                    File Nickname
                  </ModalContentsTitle>
                  <UploadOptionNicknameInput/>
                </UploadOptionNicknameBox>

                <UploadOptionDateBox>
                  <ModalContentsTitle>
                    <UploadContentsDot />
                    File Date
                  </ModalContentsTitle>
                  <UploadOptionDateSelect> 
                    <DateIcon />
                    <ReactDatePicker
                      selected={startDate}              // TypeError: setStartDate is not a function
                      onChange={(date) => setStartDate(date)}
                      customInput={<ExampleCustomInput />}
                      popperModifiers={{ preventOverflow: { enabled: true } }}
                      popperPlacement='bottom'
                      dateFormat='yyyy. MM. dd. eee'
                      fixedHeight={true}
                    />
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