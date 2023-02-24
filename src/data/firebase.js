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
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomai,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// 파베초기화 - export해서 내보내줘야지 컴포넌트에서 무리없이 사용가능
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// 분명히 안됬었는데 또 실행되어 주석처리 해둡니다. 확인해볼것

// firebase의 firestore 인스턴스를 변수에 저장, 파베 사용하기 위해 설정
export const db = getFirestore(app);
