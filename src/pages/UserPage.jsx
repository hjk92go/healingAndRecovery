import { useContext, useEffect, useState } from "react";
import { db } from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";
import userPage from "../css/UserPage.module.css";
import { Navigate } from "react-router-dom";
import SignOut from "../components/SignOut";
import ScriptFile from "../data/ScriptFile";

const UserPage = () => {
  const { state, action } = useContext(ScriptFile);
  const [comment, setComment] = useState("");
  // const [insert, setInsert] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // setInsert(comment);
    addToday();
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

  const addToday = async () => {
    try {
      const docRef = await addDoc(collection(db, "today"), {
        text: comment,
        day: new Date(),
        // user: user.uid, test...
      });
      console.log("ok", docRef.id);
      console.log("uid", docRef.uid);
      alert("오늘의 일기 등록 완료");
      window.location = "/PrintToday";
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <div>
      {state.isLogin ? (
        <div className={userPage.inputText}>
          <SignOut />
          당신의 하루를 입력해주세요.
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
      ) : (
        <div>로그인실패</div>
      )}
    </div>
  );
};

export default UserPage;
