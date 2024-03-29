import { Link } from "react-router-dom";
import home from "../css/Home.module.css";
import { useContext } from "react";
import ScriptFile from "../data/ScriptFile";

const Home = () => {
  const { state, action } = useContext(ScriptFile);
  const user = localStorage.getItem("uid");

  return (
    <div className={home.main}>
      <div className={home.intro}>
        <h1>나의 짧은 조각들</h1>
        <div className={home.text}>오늘 하루는 어땠나요?</div>
      </div>
      <br />
      {user ? (
        <div className={home.linkBtn}>
          <Link to="userpage" className={home.btn10} id={home.userBtn}>
            회원
          </Link>
          <Link to="/guest" className={home.btn10} id={home.guestBtn}>
            비회원
          </Link>
        </div>
      ) : (
        <div className={home.linkBtn}>
          <Link to="/signin" className={home.btn10} id={home.userBtn}>
            회원
          </Link>
          <div className={home.transition}></div>

          <Link to="/guest" className={home.btn10} id={home.guestBtn}>
            비회원
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
