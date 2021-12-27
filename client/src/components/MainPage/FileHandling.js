import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { address } from '../../variables';
import {
  FileHandlingBox,
  FileWrapper,
  FileAllButton,
  FileSymbol,

} from './StyledComponent';
import { RiContactsBookLine } from 'react-icons/ri';
// import { Link } from 'react-router-dom';

// props: getScriptId
const FileHandling = (props) => {

  var [FileList, setFileList] = useState([]);
  var body = {"user_pk": localStorage.getItem("user_pk")};

  useEffect(() => {
    const axiosGet = () => {
      axios.get(`${address}/getlist`, { params: body }).then((res) => {
        // console.log(res.data.filelist);
        setFileList(res.data.filelist);
      });
    };
    axiosGet();

    console.log(FileList);
  },[]);


  const FileListCreator = ({FileList}) => {

    return(
      <>
       {FileList.map((file) => (
         <FileWrapper key={file.script_id} onClick={(e) => onClickFile(file.script_id, e)}> 
            <FileSymbol/>
            {file.create_date.substring(0,10)}
            &nbsp;&nbsp;
            {file.nick_name}
         </FileWrapper>
       )) }
      </>
    );
  }

  const onClickFile = (scriptId, e) => {
    e.preventDefault();
    // console.log("fh", scriptId);
    props.getScriptId(scriptId);
  }

  return (
    <>
    <FileHandlingBox>
      <FileListCreator FileList={FileList}></FileListCreator>
      <FileAllButton>ALL</FileAllButton>
    </FileHandlingBox>
    </>
  );
};

export default FileHandling;
