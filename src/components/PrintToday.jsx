import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../data/firebase";
import print from "../css/PrintToday.module.css";
import { useContext, useEffect, useState } from "react";
import Modal from "./WriteList";
import ScriptFile from "../data/ScriptFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
const PrintToday = ({ readToday, printData }) => {
  const { state, action } = useContext(ScriptFile);
  const user = localStorage.getItem("uid");

  const selectUserDb = printData.filter(
    (userWrite) => userWrite.data().user === user
  );

  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * selectUserDb.length)
  );

  console.log("셀렉데이터", selectUserDb);
  const showScript = () => {
    setRandomNum(Math.floor(Math.random() * selectUserDb.length));
  };

  //배열이 실행될때, 안의 함수를 실행시킨다는 의미. 배열안에 어떤 함수를 넣는다면 그 함수가 실행되고, 빈 배열로 뒀을때는 현재 컴포넌트가 실행될때라는 의미, 배열안에 함수를 넣을시, 무한READ 주의
  useEffect(() => {
    readToday();
  }, []);

  useEffect(() => {
    showScript();
  }, [printData]);

  console.log("printData", printData);

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
            className={print.xMarkBtn}
            onClick={() => {
              console.log(printData.id);
              deleteDb(printData.id);
              alert("삭제완료");
              readToday();
            }}>
            <FontAwesomeIcon className={print.xMark} icon={faX} />
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

      <Modal className={print.days} toss={TodayDB} />
    </div>
  );
};
export default PrintToday;
