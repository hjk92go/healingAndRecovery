import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { db } from "../data/firebase";
import styles from "../css/PrintToday.module.css";
import { useEffect, useState } from "react";
import Modal from "../components/WriteList";

const PrintToday = () => {
  const [printData, setPrintData] = useState([]); //데이터가 배열로!!!
  const readToday = async () => {
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
  };

  const randomNum = Math.floor(Math.random() * printData.length);

  //삭제 버튼 만들어야한다.

  const TodayDB = printData.map((printData, index) => (
    <tr key={index}>
      <td>{printData.data().day.toDate().toLocaleDateString()}</td>
      <td>{printData.data().text}</td>
    </tr>
  ));
  console.log("printData", printData);

  //배열이 실행될때, 안의 함수를 실행시킨다는 의미. 배열안에 어떤 함수를 넣는다면 그 함수가 실행되고, 빈 배열로 뒀을때는 현재 컴포넌트가 실행될때라는 의미, 배열안에 함수를 넣을시, 무한READ 주의
  useEffect(() => {
    readToday();
  }, []);

  return (
    <div className={styles.background}>
      <div>
        {printData.length > 0 && printData[randomNum].data().text}
        <br />
        {printData.length > 0 &&
          printData[randomNum].data().day.toDate().toLocaleDateString()}
      </div>
      <Modal toss={TodayDB} />
    </div>
  );
};
export default PrintToday;
