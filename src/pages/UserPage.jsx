import { useContext, useEffect, useState } from "react";
import { db } from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import SignOut from "../components/SignOut";
import ScriptFile from "../data/ScriptFile";
import { getAuth } from "firebase/auth";
import userpage from "../css/UserPage.module.css";

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
  const navigate = useNavigate();

  const addToday = async () => {
    try {
      const auth = getAuth();
      const onUser = auth.currentUser;
      const userUid = onUser.uid;
      const docRef = await addDoc(collection(db, "today"), {
        text: comment,
        day: new Date(),
        user: userUid,
      });
      console.log("ok", docRef.id);
      console.log("uid", docRef.uid);
      alert("오늘의 일기 등록 완료");
      window.location = "/PrintToday";
      navigate("/PrintToday", { state: { user: userUid } });
    } catch (e) {
      console.log("error");
    }
    // console.log("UID", user.uid);
  };
  // console.log("현재UID", userUid);

  return (
    <div className={userpage.inputText}>
      {state.isLogin ? (
        <div>
          <div>
            <SignOut />
          </div>
          <button>
            <Link to="/PrintToday">일기보기</Link>
          </button>
          <div>
            당신의 하루를
            <form onSubmit={onSubmit} className={userpage.writeForm}>
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
        </div>
      ) : (
        <div>로그인실패</div>
      )}
    </div>
  );
};

export default UserPage;
