import React, { useEffect,useState } from "react";
import axios from 'axios';
import { address } from '../../variables';
import { ScriptWrapper, ScriptCreator } from "./StyledComponent";

// props: getTime, scriptId
export const Script = (props) => {

  var body = {"script_id": props.scriptId};
  var [response,setResponse] = useState();

  useEffect(() => {
    const axiosGet = () => {
      axios.get(`${address}/getfile`, { params: body }).then((res) => {
        if(res.data.content!=undefined){
          var temp = JSON.parse(res.data.content.data);
          setResponse(temp);
        } 
      });
    };
    axiosGet();
  },[props.scriptId]);

  const ScriptCreator = ({res}) => {
    if(res!=undefined){
      return(
        <>
          {res.map((index) => (
            index.words.map((index2) => (
              <span onClick={(e) => onClickWord(index2.startTime.seconds, e)}>{index2.word} </span>
            ))
          ))}
        </>
      )
    } else{
      return null
    }
  }

  const onClickWord = (t, e) => {
    e.preventDefault();
    props.getTime(t);
  };

  return(
    <>
      <ScriptWrapper>
        <ScriptCreator res={response}/>
      </ScriptWrapper>
    </>
  );

};

export default Script;