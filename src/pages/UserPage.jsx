import { useState } from "react";
import { db } from "../data/firebase";
import firebase from "firebase/compat/app";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { auth } from "../data/firebase";
import PrintToday from "../components/PrintToday";
import "../css/UserPage.css";

const UserPage = () => {
  const [comment, setComment] = useState("");
  // const [insert, setInsert] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // setInsert(comment);
    addToday();
  };

  // //데이터를 추가하는 함수
  const addToday = async () => {
    try {
      const docRef = await addDoc(collection(db, "today"), {
        text: comment,
        day: `${new Date().toLocaleDateString()}`,
        time: new Date(),
      });
      console.log("ok", docRef.id);
      alert("오늘의 일기 등록 완료");
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <div className="inputText">
      당신의 하루를 입력해주세요
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="insertComment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="여기에 입력해주세요."
        />
        <button>입력</button>
      </form>
      <PrintToday />
    </div>
  );
};

export default UserPage;
