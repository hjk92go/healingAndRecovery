// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//로그인 및 회원가입 인증 관련
import { getAuth } from "firebase/auth";
// //파베 데이터 관련
import { getFirestore } from "firebase/firestore";

// After: version 9 compat 추가해서 작성한다음 임포트해야한다.
// 안해도 실행 되서 일단 주석처리 해둡니당
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYI4WNrj34MDrzL7gSFwTOkwADwsEFzGk",
  authDomain: "todaymylife-62d35.firebaseapp.com",
  projectId: "todaymylife-62d35",
  storageBucket: "todaymylife-62d35.appspot.com",
  messagingSenderId: "416660437086",
  appId: "1:416660437086:web:11c5df540181eb5d6b1ccf",
  measurementId: "G-Z2DF4GMNRY",
};

// 파베초기화 - export해서 내보내줘야지 컴포넌트에서 무리없이 사용가능
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// firebase의 firestore 인스턴스를 변수에 저장, 파베 사용하기 위해 설정
export const db = getFirestore(app);
