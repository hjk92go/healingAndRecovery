import {
  doc,
  Firestore,
  getDoc,
  getDocs,
  QuerySnapshot,
  query,
  collection,
} from "firebase/firestore";
import { db } from "../data/firebase";
import "../css/PrintToday.css";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const PrintToday = () => {
  const [printData, setPrintData] = useState([]); //데이터가 배열로!!!
  const readToday = async () => {
    // today콜렉션의 모든 데이터를 불러는 쿼리, 불러올 데이터에 조건을 넣고싶으면 where 사용해준다.
    const readDB = query(collection(db, "today"));
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
  // const randomToday = printData.map((printData) =>
  //   printData.data().day.toDate()
  // );
  // console.log("randomToday", randomToday);

  // console.log(printData);

  const TodayDB = printData.map((printData, index) => (
    <div>{printData.data().text}</div>
  ));
  const dayDB = printData.map((printData) => printData.data().day);
  const randomNum = Math.floor(Math.random() * TodayDB.length + 1);
  console.log("todayDB", TodayDB);
  console.log("printData", printData);
  console.log("lenght", TodayDB.lenght);
  //배열이 실행될때, 안의 함수를 실행시킨다는 의미. 배열안에 어떤 함수를 넣는다면 그 함수가 실행되고, 빈 배열로 뒀을때는 현재 컴포넌트가 실행될때라는 의미, 배열안에 함수를 넣을시, 무한READ 주의
  useEffect(() => {
    readToday();
  }, []);
  return (
    <div className="userPage_background">
      {/* {TodayDB[randomNum]}
      <br />
      {dayDB[randomNum]} */}
      <Modal toss={TodayDB} />
    </div>
  );
};
export default PrintToday;
