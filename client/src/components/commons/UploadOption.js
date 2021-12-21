import React, { UseEffect, forwardRef, useState, Component } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { address } from '../../variables';
import Loading from './Loading';

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

  const [loading, setLoading] = useState(null);

  const dateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const fileHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    console.log(file);
  };

  const filenameHandler = (e) => {
    e.preventDefault();
    setFilename(e.target.value);
  };
  
 
  const submitHandler = async (e) => {
    UseEffect( async () => {
      e.preventDefault();

      // const audioSrc = window.URL.createObjectURL(file);
      const data = new FormData()
      data.append('file', file);
      data.append('filename', filename);
      data.append('date', date);

      console.log(data);


      try {
        setLoading(true);
      
        await axios.post(`${address}/uploadAudio`, data).then((res) => {

          const accessToken = 'Bearer ' + res.data.accessToken;
          axios.defaults.headers.common['Authorization'] = accessToken;
          localStorage.setItem('Authorization', accessToken);

          console.log(res.status);
          console.log(res.body);
          // if (res.status === 201) navigate('/');
          
        })
      } catch(e){
        //에러 처리
      }
      
      setLoading(false);
      
    
  }, [])
};

  if (loading) return <Loading type="spin" color="gray" message={"Uploading"} />;

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
                    accept=".mp3"
                    // value={file}
                    onChange={fileHandler}
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