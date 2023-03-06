import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  const logOut = () => {
    authService.signOut();
    navigate("/");
  };

  return (
    <div>
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
};

export default SignOut;
