import { useState } from "react";
import { db } from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";
import "../css/UserPage.css";
import { Navigate } from "react-router-dom";

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
        day: new Date(),
      });
      console.log("ok", docRef.id);
      alert("오늘의 일기 등록 완료");
      window.location = "/PrintToday";
    } catch (e) {
      console.log("error");
    }
  };
  const goPrintToday = () => {
    Navigate("/PrintToday");
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
    </div>
  );
};

export default UserPage;
