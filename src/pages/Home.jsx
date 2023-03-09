import { Link } from "react-router-dom";
import style from "../css/Home.module.css";
import { useContext, useEffect } from "react";
import ScriptFile from "../data/ScriptFile";

const Home = () => {
  const { state, action } = useContext(ScriptFile);

  const user = localStorage.getItem("uid");
  useEffect(() => {
    if (user) {
      action.setIsLogin(true);
    } else {
      action.setIsLogin(false);
    }
  }, []);
  return (
    <div className={style.main}>
      <span className={style.main}>당신을 항상 응원합니다.</span> <br />
      {localStorage.getItem("uid") ? (
        <div>
          {" "}
          <Link to="/UserPage" className={style.btn10} id={style.userBtn}>
            회원
          </Link>
          <br />
          <Link to="/Guest" className={style.btn10} id={style.guestBtn}>
            비회원
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/SignIn" className={style.btn10} id={style.userBtn}>
            회원
          </Link>
          <div className={style.transition}></div>
          <br />
          <Link to="/Guest" className={style.btn10} id={style.guestBtn}>
            비회원
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
