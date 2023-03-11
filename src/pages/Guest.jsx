import { useContext } from "react";
import ScriptFile from "../data/ScriptFile";
import style from "../css/Guest.module.css";
import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";
const Guest = () => {
  // 함수로 사용하게 되면 매번 새로운 숫자를 불러오기떄문에 숫자 통일 X => usestate를 이용하면 가능
  // const randomNum = () => {
  //   return Math.floor(Math.random() * 50 + 1);
  // };

  const randomNum = Math.floor(Math.random() * 50 + 1);
  const { state, action } = useContext(ScriptFile);
  console.log(state.script[0].comment);
  return (
    <div>
      <div className={style.cheerUp}>
        <p>{state.script[randomNum].comment}</p>
        <p>- {state.script[randomNum].author} -</p>
      </div>
      <p>당신의 소중한 하루를 이곳에 보관해주세요.</p>
      <button>
        <Link to="/SignUp">회원가입하러가기</Link>
      </button>
    </div>
  );
};
export default Guest;
