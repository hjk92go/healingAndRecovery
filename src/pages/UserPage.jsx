import { useContext, useEffect, useState } from "react";
import { db } from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import SignOut from "../components/SignOut";
import ScriptFile from "../data/ScriptFile";
import { getAuth } from "firebase/auth";
import userpage from "../css/UserPage.module.css";
import PrintToday from "./PrintToday";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const UserPage = () => {
  const { state, action } = useContext(ScriptFile);
  const [comment, setComment] = useState("");

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
      //페이지 이동 안쓸꺼면 마지막에 삭제할것
      // window.location = "/PrintToday";
      // navigate("/PrintToday", { state: { user: userUid } });
    } catch (e) {
      console.log("error");
    }
    // console.log("UID", user.uid);
  };
  // console.log("현재UID", userUid);

  return (
    <div>
      {state.isLogin ? (
        <div>
          <div className={userpage.twoBtns}>
            <Link className={userpage.homeBtn} to="/">
              <FontAwesomeIcon className={userpage.homeIcon} icon={faHouse} />
            </Link>
            <div className={userpage.outBtn}>
              <SignOut />
            </div>
          </div>

          <div className={userpage.inputText}>
            <span>당신의 끝나지 않은 긴 하루를 마무리 하며</span>
            <form onSubmit={onSubmit} className={userpage.writeForm}>
              <input
                type="text"
                className={userpage.insertComment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                placeholder="당신의 하루를 여기에 입력해주세요."
              />
              <button className={userpage.okBtn}>
                <FontAwesomeIcon className={userpage.check} icon={faCheck} />
              </button>
            </form>
          </div>
          <PrintToday />
        </div>
      ) : (
        <div>로그인실패</div>
      )}
    </div>
  );
};

export default UserPage;
