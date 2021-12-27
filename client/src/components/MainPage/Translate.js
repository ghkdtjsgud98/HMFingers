
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { address } from '../../variables';

import {
  TranslateWrapper,
  // LanguageButtonWrapper,
  // LanguageButton,

} from "./StyledComponent";

const Translate = (props) => {
  var [contents, setContents] = useState("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");
  var [language, setLanguage] = useState('');
  // var body = {"user_pk": localStorage.getItem("user_pk"), nation_code: language, origin_script_id: props.scriptId};
  var body = {"user_pk": localStorage.getItem("user_pk"), nation_code: 'ko', origin_script_id: 8844};

  const onClickLanguage = (e, language) => {
    e.preventDefault();
    setLanguage(language);

    // props.scriptId, language, "user_pk": localStorage.getItem("user_pk") 전달
  }
  //console.log("tr", language);

  useEffect(() => {
    const axiosGet = async () => {
      await axios.get(`${address}/uploadTranslatedScript`, { params: body }).then((res) => {
        setContents(res);
      });
    };
    axiosGet();

    // console.log(body);
    //console.log(contents);

  },[]);


  return(
    
    <TranslateWrapper>
      {/* <LanguageButtonWrapper>
        <LanguageButton onClick={(e) => onClickLanguage(e, 'ko')}>한국어</LanguageButton>
        <LanguageButton onClick={(e) => onClickLanguage(e, 'en')}>English</LanguageButton>
        <LanguageButton onClick={(e) => onClickLanguage(e, 'ja')}>日本語</LanguageButton>
        <LanguageButton onClick={(e) => onClickLanguage(e, 'es')}>español</LanguageButton>
      </LanguageButtonWrapper> */}
      {contents}
    </TranslateWrapper>
  );  
};
  
  
export default Translate;