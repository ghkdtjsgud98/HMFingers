import React, { useEffect,useState } from "react";
import axios from 'axios';
import { address } from '../../variables';
import { ScriptWrapper, ScriptCreator } from "./StyledComponent";

// props: getTime, scriptId
export const Script = (props) => {

  // var [contents, setContents] = useState("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");
  // var [words, setWords] = useState( [
  //   {
  //     word : "Hi, ", 
  //     startTime : 5
  //   },
  //   {
  //     word : "I'm ",
  //     starttTime : 80
  //   },
  //   {
  //     word : "Jihyun. ", 
  //     startTime : 100
  //   }
  // ]); 

  // var temp;
  var script = "";
  var body = {"script_id": props.scriptId};
  var [response,setResponse] = useState();

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

  const ScriptCreator = ({res}) => {
    // console.log("-->", res);
    if(res!=undefined){
      return(
        <>
          {res.map((index) => (
            index.words.map((index2) => (
              <span onClick={() => onClickWord(index2.startTime.seconds)}>{index2.word} </span>
            ))
          ))}
        </>
      )
    } else{
      return null
    }
  }

  const onClickWord = (t) => {
    // console.log("sc", t);
    props.getTime(t);
  };

  // console.log("script->scriptId", props.scriptId);

  
  return(
    <>

      <ScriptWrapper>

        {/* currentTime Test용
        {words.map(words => (<span>{words.word}</span>))}
        <button onClick={() => onClickWord(30)}>30초시작</button>
        <button onClick={() => onClickWord(60)}>60초시작</button>
        <br /><br />

        {contents} */}
        {/* {script} */}
        <ScriptCreator res={response}/>
      </ScriptWrapper>
    </>
  );

};

export default Script;