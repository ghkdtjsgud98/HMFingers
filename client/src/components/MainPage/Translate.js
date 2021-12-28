
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { address } from '../../variables';

import {
  TranslateWrapper,
  LanguageButtonWrapper,
  LanguageButton,
  TranslateScript,

} from "./StyledComponent";

export const Translate = (props) => {
  var [response, setResponse] = useState();
  var [contents, setContents] = useState("");
  //var [TRFileList, setTRFileList] = useState([]);
  var [language, setLanguage] = useState('');

  const onClickLanguage = (e, language) => {
    // e.preventDefault();
    setLanguage(language);
    //uploadBody
    const body = {"user_pk": localStorage.getItem("user_pk"), nation_code: language, origin_script_id: props.scriptId, create_date: "null", nick_name: "null", data : script };

    //getBody
    const body2 = {nation_code: language, origin_script_id: props.scriptId};

    

    //////////////////////////////////////Translate/////////////////////////////////////////////

    const axiosPost = () => {
      axios.post(`${address}/uploadTranslatedScript`, body).then((res) => {
        console.log('POST Body===> ', body);
        // setContents('transcript upload ==> ', res);
        
        axios.get(`${address}/getTranslatedFile`, {params : body2}).then((res) => {
          console.log('GET Body===> ', body2);
          console.log('GET Response ===> ', res);
          if(res.data.content.data!=undefined){
            setContents(res.data.content.data);
          }
          else{
            setContents("잘못된 script_id 입니다.");
          }
          
        });
      });
    };
    axiosPost();

    // const axiosGet = () => {
    //   axios.get(`${address}/getTranslatedFile`, {params : body2}).then((res) => {
    //     console.log('GET Body===> ', body2);
    //     console.log('GET Response ===> ', res);
    //     if(res.data!=undefined){
    //       setContents(res.data.content.data);
    //     }
    //     else{
    //       setContents("잘못된 script_id 입니다.");
    //     }
        
    //   });
    // };
    // axiosGet();
    
  }


  ////////////////////////////////////////////////////////////////////////////////////////////



  useEffect(() => {
    const axiosGet = () => {
      axios.get(`${address}/getFile`, { params: {script_id: props.scriptId} }).then((res) => {
        if(res.data.content!=undefined){
          var temp = JSON.parse(res.data.content.data);
          setResponse(temp);
          // console.log("res",response);
      } 
      });
    };
    axiosGet();
  },[props.scriptId]);

  var script = "";
  if(response!=undefined){ response.map((index)=>{
    script+=index.transcript;
    script+=" ";
  })
  //console.log(script); 
  } 
 


  return(
    
    <TranslateWrapper>
      <LanguageButtonWrapper>
        <LanguageButton onClick={(e) => onClickLanguage(e, 'ko')}>한국어</LanguageButton>
        <LanguageButton onClick={(e) => onClickLanguage(e, 'en')}>English</LanguageButton>
        <LanguageButton onClick={(e) => onClickLanguage(e, 'ja')}>日本語</LanguageButton>
        <LanguageButton onClick={(e) => onClickLanguage(e, 'es')}>español</LanguageButton>
      </LanguageButtonWrapper>
      {contents}
    </TranslateWrapper>
  );  
};
  
  
export default Translate;