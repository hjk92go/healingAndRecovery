import { useContext } from "react";
import ScriptFile from "../data/ScriptFile";

const PrintForGuest = () => {
  // 함수로 사용하게 되면 매번 새로운 숫자를 불러오기떄문에 숫자 통일 X => usestate를 이용하면 가능
  // const randomNum = () => {
  //   return Math.floor(Math.random() * 50 + 1);
  // };

  const randomNum = Math.floor(Math.random() * 50 + 1);
  const { state, action } = useContext(ScriptFile);
  console.log(state.script[0].comment);
  return (
    <div className="cheerUp">
      <h2>{state.script[randomNum].comment}</h2>
      <h2> {state.script[randomNum].author}</h2>
    </div>
  );
};
export default PrintForGuest;
