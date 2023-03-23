import { useContext, useEffect, useState } from "react";
import ScriptFile from "../data/ScriptFile";
import style from "../css/Guest.module.css";
import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import SignOut from "../components/SignOut";
const Guest = () => {
  // 함수로 사용하게 되면 매번 새로운 숫자를 불러오기떄문에 숫자 통일 X => usestate를 이용하면 가능
  // const randomNum = () => {
  //   return Math.floor(Math.random() * 50 + 1);
  // };
  const user = localStorage.getItem("uid");
  const { state, action } = useContext(ScriptFile);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 50 + 1)
  );
  const showScript = () => {
    setRandomNum(Math.floor(Math.random() * 50 + 1));
  };

  return (
    <div>
      {user ? (
        <div className={style.twoBtns}>
          <Link className={style.homeBtn} to="/">
            <FontAwesomeIcon className={style.homeIcon} icon={faHouse} />
          </Link>
          <div className={style.outBtn}>
            <SignOut />
          </div>
        </div>
      ) : (
        <div className={style.twoBtns}>
          <Link className={style.homeBtn} to="/">
            <FontAwesomeIcon className={style.homeIcon} icon={faHouse} />
          </Link>
        </div>
      )}

      <div className={style.cheerUp}>
        <span className={style.doubleMark1}>❝</span>
        <span className={style.doubleMark2}>❞</span>
        <div className={style.comment}>{state.script[randomNum].comment}</div>
        <div className={style.author}>
          {state.script[randomNum].author}
          <button
            className={style.reBtn}
            onClick={() => {
              showScript();
            }}>
            <FontAwesomeIcon className={style.reIcon} icon={faForward} />
          </button>
        </div>
      </div>
      <div className={style.ad}>
        당신의 소중한 하루를 이곳에 보관해주세요&nbsp;
        <Link to="/SignUp">
          <FontAwesomeIcon className={style.userPlus} icon={faUserPlus} />
        </Link>
      </div>
    </div>
  );
};
export default Guest;
