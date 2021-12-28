import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { address } from '../../variables';

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
} from "./StyledComponent";


const UploadOption = (props) => {

  const { isOpen, close } = props;
  const [file, setFile] = useState();
  const [date, setDate] = useState('');
  const [filename, setFilename] = useState('');
  const navigate = useNavigate();

  const dateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const fileHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const filenameHandler = (e) => {
    e.preventDefault();
    setFilename(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('file', file);
    data.append('filename', filename);
    data.append('date', date);
    data.append('user_pk', localStorage.getItem("user_pk"));

    axios.post(`${address}/uploadAudio`, data).then((res) => {
      if (res.status === 200) navigate(0);
    });

  };

  return (
    <>
      {isOpen ? ( 
        <ModalBackground>
          <UploadOptionModal onSubmit={SubmitHandler}>
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
                      required
                    />
                    File Selection
                    <UploadOptionCheckInput 
                      type="radio" 
                      name="file" 
                      value="Streaming"
                      required
                    />
                    Streaming
                  </ModalContentsTitle>
                </UploadOptionContentCheckBox>   
                <UploadOptionFileSelect method="post" enctype="multipart/form-data"> 
                  <UploadOptionFileInput 
                    type="file"              
                    accept="audio/*"
                    // value={file}
                    onChange={fileHandler}
                    required
                  />
                </UploadOptionFileSelect>
              </UploadOptionFileSelectBox>
              <UploadOptionNicknameBox>
                <ModalContentsTitle>
                  <UploadContentsDot/>
                  File Nickname
                </ModalContentsTitle>
                <UploadOptionNicknameInput
                  type='filename'
                  value={filename}
                  onChange={filenameHandler}
                  required
                />
              </UploadOptionNicknameBox>
              <UploadOptionDateBox>
                <ModalContentsTitle>
                  <UploadContentsDot/>
                  File Date
                </ModalContentsTitle>
                <UploadOptionDateSelect> 
                  <UploadOptionDateInput 
                    type="date"
                    value={date}
                    onChange={dateHandler}
                    required
                  />
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