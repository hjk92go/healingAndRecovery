import {
  getAuth,
  signInWithEmailAndPassword, //로그인
  onAuthStateChanged, //사용자 정보 가져오기
} from "firebase/auth";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ScriptFile from "../data/ScriptFile";

const SignIn = () => {
  const { state, action } = useContext(ScriptFile);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    emailSignIn();
  };

  //로그인
  const emailSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        //키에 데이터 쓰기
        localStorage.setItem("uid", user.uid);
        console.log("UID", user.uid);
        action.setIsLogin(true);
        alert("HI");
        window.location = "/UserPage";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
          alert("없는 이메일 입니다");
        } else if (errorCode === "auth/invalid-email") {
          alert("이메일을 확인해주세요");
        } else if (errorCode === "auth/wrong-password") {
          alert("비밀번호를 확인해주세요");
        }
        console.log(errorCode);
      });
  };

  const user = localStorage.getItem("uid");
  //user값이 변할때 마다 리렌더링
  useEffect(() => {
    if (user) {
      action.setIsLogin(true);
    } else {
      action.setIsLogin(false);
    }
  }, [user]);

  return (
    <div>
      {state.isLogin ? (
        <div>이미 로그인된 상태입니다.</div>
      ) : (
        <form onSubmit={onSubmit}>
          <div>
            <h1>로그인</h1>
          </div>
          <div>
            이메일:
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}></input>
          </div>
          <div>
            비밀번호:
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}></input>
          </div>
          <button>로그인</button>
          <button>
            <Link to="/SignUp">회원가입</Link>
          </button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
