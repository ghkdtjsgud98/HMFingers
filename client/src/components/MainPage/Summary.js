import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { address } from '../../variables';
import { SummaryWrapper, 
  SummaryWordsWrapper, 
  SummaryWordsList,
  SummaryWordsIcon, 
  SummaryWordsCreator
} from './StyledComponent';

const Summary = (props) => {
  
  var [response, setResponse] = useState();
  var [words, setWords] = useState();

  const body = {"script_id": props.scriptId};

    //script 불러오기
  useEffect(() => {
    const axiosGet = () => {
      axios.get(`${address}/getFile`, { params: body }).then((res) => {
        if(res.data.content!=undefined){
          var temp = JSON.parse(res.data.content.data);
          setResponse(temp);
        } 
      });
      axios.get(`${address}/getSummary`, { params : body }).then((res) => {
        setWords(res.data.content);
      });
    };
    axiosGet();
  },[props.scriptId]);

  const onClickWord = (e, url) => {
    e.preventDefault();
    window.open(url);
  };

  var script = "";
  if(response!=undefined){ response.map((index)=>{
    script+=index.transcript;
    script+=" ";
  })}; 

  const SummaryWordsCreator = ({words}) => {
    if(words!=undefined){
      return(
        <>
          {words.LOCATION.map((index) => (
            <SummaryWordsList onClick={(e) => onClickWord(e, index.url)}><SummaryWordsIcon />{index.word}</SummaryWordsList>
          ))}
          {words.ORGANIZATION.map((index) => (
            <SummaryWordsList onClick={(e) => onClickWord(e, index.url)}><SummaryWordsIcon />{index.word}</SummaryWordsList>
          ))}
          {words.OTHER.map((index) => (
            <SummaryWordsList onClick={(e) => onClickWord(e, index.url)}><SummaryWordsIcon />{index.word}</SummaryWordsList>
          ))}
        </>
      )
    } else{
      return null
    }
  }
 

  return(
    <>
      <SummaryWrapper>
        <div>{script}</div>
      </SummaryWrapper>
      <SummaryWordsWrapper>
        <SummaryWordsCreator words={words}/>
      </SummaryWordsWrapper>
    </>
  );

}


export default Summary;
