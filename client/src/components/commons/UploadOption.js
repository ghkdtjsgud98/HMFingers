import React, { useEffect, forwardRef, useState, Component } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { address } from '../../variables';
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
} from "./StyledComponent";


const UploadOption = (props) => {

  const { isOpen, close } = props;
  const [file, setFile] = useState();
  const [date, setDate] = useState('');
  const [filename, setFilename] = useState('');
  //const navigate = useNavigate();

  const fileHandler = (e) => {
    e.preventDefault();
    setFile(e.target.value);
  };

  const dateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);

    //console.log(e.target.value);
  };

  const filenameHandler = (e) => {
    e.preventDefault();
    setFilename(e.target.value);

    //console.log(e.target.value);
  };
  

  const submitHandler = async (e) => {
    e.preventDefault();

    let body = {
      file : file,
      filename: filename,
      date: date,
    };

    // await axios.post(`${address}/login`, body).then((res) => {
    //   const accessToken = 'Bearer ' + res.data.accessToken;
    //   axios.defaults.headers.common['Authorization'] = accessToken;
    //   localStorage.setItem('Authorization', accessToken);

    //   console.log(res.status);
      
    //   if (res.status === 200) navigate('/main');
    //   // if (res.status === 200) window.location = '/about';
    // });

    await axios.post(`${address}/uploadAudio`, body).then((res) => {

      const accessToken = 'Bearer ' + res.data.accessToken;
      axios.defaults.headers.common['Authorization'] = accessToken;
      localStorage.setItem('Authorization', accessToken);

      console.log(res.status);
      console.log(res.body);
      // if (res.status === 201) navigate('/');
    });

  };

  
  return (
    <>
      {isOpen ? ( 
        <ModalBackground>
          <UploadOptionModal onSubmit={submitHandler} >
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


                <UploadOptionFileSelect method="post" enctype="multipart/form-data">        {/*FileSelection 체크박스 선택하면 활성화돼야 함*/}
                  {/* multipart/form-data : 인코딩하지 않음, 파일이나 이미지를 서버로 전송할 때 주로 사용 */}
                  {/* <input type="file" onChange={(e) => {onFileUpload(e)}} /> */}
                  <UploadOptionFileInput 
                    type="file"              
                    accept=".wav"
                    value={file}
                    // onChange={(files) => setFile(files)}
                    onchange={fileHandler}
                    required
                  />
                </UploadOptionFileSelect>

              </UploadOptionFileSelectBox>

              <UploadOptionNicknameBox>
                <ModalContentsTitle>
                  <UploadContentsDot />
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
                  <UploadContentsDot />
                  File Date
                </ModalContentsTitle>
                <UploadOptionDateSelect> 
                  {/* <DateIcon /> */}
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