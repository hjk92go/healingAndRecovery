import firebase from "../data/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  //이메일과 비밀번호의 값을 가져올 state
  const [email, setEmail] = useState();
  const [newEmail, setNewEmail] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  //Form의 onSubmit에 연결할 함수
  // Form의 경우에는 새로고침으로 값이 사라질 수 있음
  const onSubmit = (e) => {
    e.preventDefault();
    setNewEmail(email);
    setNewPassword(password);
    emailSignUp();
  };

  // console.log(email);
  console.log(newEmail);
  console.log(newPassword);

  //이메일 회원가입
  const emailSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("회원가입이 완료되었습니다.");
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          alert("이미 사용중인 이메일입니다.");
        } else if (errorCode === "auth/weak-password") {
          alert("비밀번호를 6자리 이상으로 작성하세요.");
        } else if (errorCode === "auth/invalid-email") {
          alert("이메일 형식이 잘못되었습니다.");
        }
      });
  };

  return (
    //onSubmit넣어야 한꺼번에 모아 보내줌 //백의경우 <form action="서버주소">의 형식으로 보내주기도 한다.
    <form onSubmit={onSubmit}>
      <h1>회원가입</h1>
      <div>이메일</div>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div>비밀번호</div>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {/* <div>비밀번호 확인</div>
        <input type="password" /> - 추후 확인 가능한 코드 작성후 살려야됨*/}
      <br />
      <button>로그인하기</button>
      <button>회원가입하기</button>
    </form>
  );
};

export default SignUp;
