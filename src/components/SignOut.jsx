import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import signout from "../css/SignOut.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const SignOut = () => {
  const navigator = useNavigate();
  const isSignOut = () => {
    localStorage.clear();
    alert("로그아웃되었습니다.");
    navigator("/");
  };
  return (
    <div className={signout.onBtn}>
      <button onClick={() => isSignOut()}>
        <FontAwesomeIcon
          className={signout.signoutIcon}
          icon={faArrowRightFromBracket}
        />
      </button>
    </div>
  );
};

export default SignOut;
