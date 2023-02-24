import { useState } from "react";
import PrintToday from "../components/PrintToday";
import "../css/UserPage.css";

const UserPage = () => {
  const [comment, setComment] = useState("");
  const [insert, setInsert] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setInsert(comment);
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
      <PrintToday insert={insert} />
    </div>
  );
};

export default UserPage;
