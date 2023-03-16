import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import signout from "../css/SignOut.module.css";

const SignOut = () => {
  const isSignOut = () => {
    localStorage.clear();
    alert("로그아웃되었습니다.");
    window.location = "/";
  };
  return (
    <div className={signout.onBtn}>
      <button onClick={() => isSignOut()}>로그아웃</button>
    </div>
  );
};

export default SignOut;
