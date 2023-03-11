import { Link } from "react-router-dom";
import home from "../css/Home.module.css";
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
    <div className={home.main}>
      <span className={home.main}>
        당신의 끝나지 않은 긴 하루를 마무리 하며
      </span>{" "}
      <br />
      {localStorage.getItem("uid") ? (
        <div className={home.linkBtn}>
          <Link to="/UserPage" className={home.btn10} id={home.userBtn}>
            회원
          </Link>
          <Link to="/Guest" className={home.btn10} id={home.guestBtn}>
            비회원
          </Link>
        </div>
      ) : (
        <div className={home.linkBtn}>
          <Link to="/SignIn" className={home.btn10} id={home.userBtn}>
            회원
          </Link>
          <div className={home.transition}></div>

          <Link to="/Guest" className={home.btn10} id={home.guestBtn}>
            비회원
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
