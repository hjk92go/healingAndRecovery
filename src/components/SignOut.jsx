import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const SignOut = () => {
  const isSignOut = () => {
    localStorage.clear();
    alert("로그아웃되었습니다.");
    window.location = "/";
  };
  return (
    <div>
      <button onClick={() => isSignOut()}>로그아웃</button>
    </div>
  );
};

export default SignOut;
