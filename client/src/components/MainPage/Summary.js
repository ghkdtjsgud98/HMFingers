import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { address } from '../../variables';
import { SummaryWrapper, SummaryWordsWrapper, SummaryWordsList, SummaryWordsIcon, } from './StyledComponent';

const Summary = (props) => {
  
  var [response, setResponse] = useState();

  var [words, setWords] = useState( [
    {
      word : "안녕", 
      url : "https://saint.ssu.ac.kr/",
    },
    {
      word : "JIHYUN",
      url : "https://saint.ssu.ac.kr/",
    },
    {
      word : "JIWON", 
      url : "https://saint.ssu.ac.kr/",
    },
    {
      word : "A+",
      url : "https://saint.ssu.ac.kr/",
    },
  ]); 

  const body = {script_id: props.scriptId};

  const axiosGet = () => {
    axios.get(`${address}/getSummary`, {params : body}).then((res) => {
      console.log('GET Body===> ', body);

      // setContents(res.data.content.data);
      
      console.log('GET Response ===> ', res);
    });
  };
  axiosGet();

  const onClickWord = (e, url) => {
    console.log("wordurl===>", url);
    e.preventDefault();
    // console.log("sc", t);
    window.open(url);
  };



  //script 불러오기
  useEffect(() => {
    const axiosGet = () => {
      axios.get(`${address}/getFile`, { params: body }).then((res) => {
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
    <>
      <SummaryWrapper>
        <div>{script}</div>
      </SummaryWrapper>
      <SummaryWordsWrapper>
        {words.map(words => (<SummaryWordsList onClick={(e) => onClickWord(e, words.url)} ><SummaryWordsIcon />{words.word}</SummaryWordsList>))}
      </SummaryWordsWrapper>
    </>
  );

}


export default Summary;
