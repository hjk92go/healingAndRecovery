import {
  getDocs,
  query,
  collection,
  orderBy,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../data/firebase";
import print from "../css/PrintToday.module.css";
import { useContext, useEffect, useState } from "react";
import Modal from "../components/WriteList";
import ScriptFile from "../data/ScriptFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

const PrintToday = () => {
  const { state, action } = useContext(ScriptFile);
  const [printData, setPrintData] = useState([]); //데이터가 배열로!!!
  const user = localStorage.getItem("uid");
  const selectUserDb = printData.filter(
    (userWrite) => userWrite.data().user === user
  );

  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * selectUserDb.length)
  );
  const showScript = () => {
    setRandomNum(Math.floor(Math.random() * selectUserDb.length));
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
  //배열이 실행될때, 안의 함수를 실행시킨다는 의미. 배열안에 어떤 함수를 넣는다면 그 함수가 실행되고, 빈 배열로 뒀을때는 현재 컴포넌트가 실행될때라는 의미, 배열안에 함수를 넣을시, 무한READ 주의
  useEffect(() => {
    readToday();
  }, []);

  //삭제 버튼 만들어야한다.
  const deleteDb = async (text) => {
    const todayDoc = doc(db, "today", text);
    await deleteDoc(todayDoc);
  };

  useEffect(() => {
    if (user) {
      action.setIsLogin(true);
    } else {
      action.setIsLogin(false);
    }
  }, [user]);

  const TodayDB = printData.map((printData, idx) =>
    printData.data().user === user ? (
      <tr key={idx}>
        <td>{printData.data().day.toDate().toLocaleDateString()}</td>
        <td>{printData.data().text}</td>
        <td>
          <button
            onClick={() => {
              console.log(printData.id);
              deleteDb(printData.id);
              alert("삭제완료");
              readToday();
            }}>
            삭제
          </button>
        </td>
      </tr>
    ) : (
      ""
    )
  );

  return (
    <div>
      <div className={print.background}>
        <span className={print.doubleMark1}>❝</span>
        <span className={print.doubleMark2}>❞</span>
        <div className={print.day}>
          {selectUserDb.length > 0 &&
            selectUserDb[randomNum]
              .data()
              .day.toDate()
              .toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
          <button
            className={print.reBtn}
            onClick={() => {
              showScript();
            }}>
            <FontAwesomeIcon className={print.reIcon} icon={faForward} />
          </button>
        </div>
        <div className={print.text}>
          {selectUserDb.length > 0 && selectUserDb[randomNum].data().text}
        </div>
      </div>
      {/* <div className={print.days}>지금까지 보관된 일상들</div> */}
      <Modal className={print.days} toss={TodayDB} />
    </div>
  );
};
export default PrintToday;
