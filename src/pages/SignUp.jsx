import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import signup from "../css/SignUp.module.css";

const SignUp = () => {
  //이메일,비밀번호,확인
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();
  //검사
  const [testPassword, setTestPassword] = useState();
  const [showMessagePass, setShowMessagePass] = useState();
  const [reShowMessagePass, setReShowMessagePass] = useState();
  const [okButton, setOkButton] = useState(true);
  const onUser = localStorage.getItem("uid");

  //Form의 onSubmit에 연결할 함수
  // Form의 경우에는 새로고침으로 값이 사라질 수 있음
  const onSubmit = (e) => {
    e.preventDefault();
    emailSignUp();
  };

  //이메일 회원가입
  const emailSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("회원가입이 완료되었습니다.");
        window.location = "/SignIn";
      })

      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          alert("이미 사용중인 이메일입니다.");
        } else if (errorCode === "auth/weak-password") {
          alert("비밀번호를 6자리 이상으로 작성하세요.");
        } else if (errorCode === "auth/invalid-email") {
          alert("이메일 형식이 잘못되었습니다.");
        }
      });
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password) === true) {
      setCheckPassword(true);
      setShowMessagePass("사용가능 합니다.");
    } else {
      setCheckPassword(false);
      setShowMessagePass("영문, 숫자, 특수문자 포함\n6자 이상 입력해주세요");
    }
  };

  const correctPassword = (e) => {
    const isPasswordConfirm = e.target.value;
    if (password !== isPasswordConfirm) {
      setTestPassword(false);
      setReShowMessagePass("비밀번호가 일치하지 않습니다.");
    } else {
      setTestPassword(true);
      setReShowMessagePass("비밀번호가 일치합니다.");
    }
  };

  console.log("패스워드", password);

  useEffect(() => {
    if (checkPassword && testPassword == true) {
      setOkButton(false);
    } else {
      setOkButton(true);
    }
  }, [checkPassword, testPassword]);

  return (
    <div>
      {onUser ? (
        <div>이미 로그인된 상태입니다</div>
      ) : (
        //onSubmit넣어야 한꺼번에 모아 보내줌 //백의경우 <form action="서버주소">의 형식으로 보내주기도 한다.
        <form onSubmit={onSubmit}>
          <div className={signup.createId}>
            <div className={signup.joinTitle}>
              <h1>회원가입</h1>
            </div>
            <div>이메일</div>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className={signup.password}>비밀번호</div>
            <input type="password" onChange={inputPassword} />
            <div>{showMessagePass}</div>
            <div className={signup.rePassword}>비밀번호 재확인</div>
            <input type="password" onChange={correctPassword} />
            <div>{reShowMessagePass}</div>
            <br />
            <button className={signup.joinBtn} disabled={okButton}>
              가입하기
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUp;
