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
  var [selected, SetSelected] = useState([]);

  console.log(body);

  useEffect(() => {
    const axiosGet = () => {
      axios.get(`${address}/getList`, { params: body }).then((res) => {
        // console.log(res);
        setFileList(res.data.filelist);
      });
    };
    axiosGet();

    console.log(FileList);
  },[]);


  const FileListCreator = ({FileList}) => {

    if(FileList!=undefined){
      return(
        <>
        {FileList.map((file) => (
          <FileWrapper 
          key={file.script_id} 
          onClick={(e) => onClickFile(file.script_id, e)}
          isSelected={`${file.script_id == selected? 'true':null}`}
          // isActive={`${menu === 0? 'active': null}`} 
          > 
              <FileSymbol/>
              {file.create_date.substring(0,10)}
              &nbsp;&nbsp;
              {file.nick_name}
          </FileWrapper>
        )) }
        </>
      );
    }else{
      return null;
    }
  }

  const onClickFile = (scriptId, e) => {
    e.preventDefault();
    SetSelected(scriptId);
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