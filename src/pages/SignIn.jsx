import {
  getAuth,
  signInWithEmailAndPassword, //로그인
} from "firebase/auth";
import { useContext, useState, useEffect } from "react";
import ScriptFile from "../data/ScriptFile";
import signin from "../css/SignIn.module.css";
import NotFound from "../pages/NotFound";

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

  const user = localStorage.getItem("uid"); //user값이 변할때 마다 리렌더링

  return (
    <div>
      {user ? (
        <NotFound />
      ) : (
        <form onSubmit={onSubmit} className={signin.login}>
          <div className={signin.loginDiv}>
            <h1>로그인</h1>
          </div>
          <div>
            이메일
            <br />
            <input
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}></input>
          </div>
          <div className={signin.password}>
            비밀번호
            <input
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}></input>
          </div>
          <button className={signin.loginBtn}>로그인</button>
          <button
            className={signin.signupBtn}
            onClick={() => {
              window.location = "/signup";
            }}>
            회원가입
          </button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
