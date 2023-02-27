import {
  getAuth,
  signInWithEmailAndPassword, //로그인
  signOut, //로그아웃
} from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
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
        console.log(user);
        alert("HI");
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
  return (
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
    </form>
  );
};

export default SignIn;
