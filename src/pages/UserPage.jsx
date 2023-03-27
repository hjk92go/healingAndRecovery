import { useContext, useEffect, useState } from "react";
import { db } from "../data/firebase";
import {
  getDocs,
  query,
  orderBy,
  collection,
  addDoc,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import SignOut from "../components/SignOut";
import ScriptFile from "../data/ScriptFile";
import { getAuth } from "firebase/auth";
import userpage from "../css/UserPage.module.css";
import PrintToday from "../components/PrintToday";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NotFound from "./NotFound";

const UserPage = () => {
  const { state, action } = useContext(ScriptFile);
  const [comment, setComment] = useState("");
  const [printData, setPrintData] = useState([]); //데이터가 배열로!!!

  const onSubmit = (e) => {
    e.preventDefault();
    addToday();
    readToday();
    setComment("");
  };

  const readToday = async () => {
    try {
      // today콜렉션의 모든 데이터를 불러는 쿼리, 불러올 데이터에 조건을 넣고싶으면 where 사용해준다.
      const readDB = query(collection(db, "today"), orderBy("day", "desc"));
      //가져온 데이터를 쿼리스냅샷에 넣은다음 불러온다.
      const querySnapshop = await getDocs(readDB);
      let array = [];
      querySnapshop.forEach((doc) => {
        //불러온 문서를 배열안에 넣어준다 => 안 넣어주면 무한으로 불러옴...
        array.push(doc);
        // console.log("doc", doc.data().text);
      });
      //배열을 state에 넣어준다.
      setPrintData(array);
    } catch (error) {
      console.log("ERROR", error.messange);
    }
  };

  const user = localStorage.getItem("uid");

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
      {user ? (
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
                required
                value={comment}
                placeholder="당신의 하루를 여기에 입력해주세요."
              />
              <button className={userpage.okBtn}>
                <FontAwesomeIcon className={userpage.check} icon={faCheck} />
              </button>
            </form>
          </div>
          <PrintToday readToday={readToday} printData={printData} />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default UserPage;
