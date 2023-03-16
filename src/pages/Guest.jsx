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

  //로그인 중일때 가입창 못가게 막아야함

  const randomNum = Math.floor(Math.random() * 50 + 1);
  const { state, action } = useContext(ScriptFile);
  console.log(state.script[0].comment);
  return (
    <div>
      <button
        onClick={() => {
          window.location.reload();
        }}>
        새로고침
      </button>
      <div className={style.cheerUp}>
        <p>{state.script[randomNum].comment}</p>
        <p>- {state.script[randomNum].author} -</p>
      </div>
      <div className={style.ad}>
        당신의 소중한 하루를 이곳에 보관해주세요.
        <Link to="/SignUp">회원가입하러가기</Link>
      </div>
    </div>
  );
};
export default Guest;
