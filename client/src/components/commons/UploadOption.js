import React, { forwardRef, useState, Component } from "react";
// import ReactDatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

import { 
    ModalBackground, 

    UploadOptionModal, 
    ModalTitle,
    ModalCloseButton, 
    ModalContentsWrapper,
    ModalContentsTitle,

    UploadOptionFileSelectBox,
    UploadOptionContentCheckBox,
    UploadOptionCheckInput,

    UploadOptionFileSelect,
    UploadOptionFileInput,

    UploadOptionNicknameBox,
    UploadOptionNicknameInput,

    UploadOptionDateBox,
    UploadOptionDateSelect,
    UploadOptionDateInput,

    ContentUploadButton,

    UploadContentsDot,
    
    DateIcon,
    DateText,

} from "./StyledComponent";


const UploadOption = (props) => {

  const { isOpen, close } = props;
  const [file, setFile] = useState();
  
  // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  //   //background : pink 임시지정해둠
  //   <DateText onClick={onClick} ref={ref}>      
  //     {value}
  //   </DateText>     
  // ));  
  
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
                    <UploadOptionCheckInput 
                      type="radio" 
                      name="file" 
                      value="File Selection" 
                    />
                    File Selection
                    <UploadOptionCheckInput 
                      type="radio" 
                      name="file" 
                      value="Streaming"
                    />
                    Streaming
                  </ModalContentsTitle>
                </UploadOptionContentCheckBox>   


                <UploadOptionFileSelect method="post" enctype="multipart/form-data">        {/*FileSelection 체크박스 선택하면 활성화돼야 함*/}
                  {/* multipart/form-data : 인코딩하지 않음, 파일이나 이미지를 서버로 전송할 때 주로 사용 */}
                  {/* <input type="file" onChange={(e) => {onFileUpload(e)}} /> */}
                  <UploadOptionFileInput 
                    type="file" 
                    accept=".mp3"  
                    onChange={(files) => setFile(files)}
                    required
                  />
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
                  {/* <DateIcon /> */}
                  <UploadOptionDateInput 
                    type="date"
                    required
                  />
                  {/* <ReactDatePicker
                    selected={startDate}           
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                    popperModifiers={{ preventOverflow: { enabled: true } }}
                    popperPlacement='bottom'
                    dateFormat='yyyy. MM. dd. eee'
                    fixedHeight={true}
                  /> */}
                </UploadOptionDateSelect>
              </UploadOptionDateBox>

            </ModalContentsWrapper>
            <ContentUploadButton type="submit" value="submit">Upload</ContentUploadButton>
          </UploadOptionModal>
        </ModalBackground>
      ) : null}
    </>
  );

};

export default UploadOption;