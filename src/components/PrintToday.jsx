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
const PrintToday = () => {
  const [printData, setPrintData] = useState();
  useEffect(() => {
    readToday();
  }, []);
  const readToday = async (e) => {
    // 모든 데이터를 불러옴, 불러올 데이터에 조건을 넣고싶으면 where 사용해준다.
    const readDB = query(collection(db, "today"));
    const querySnapshop = await getDocs(readDB);
    let array = [];
    querySnapshop.forEach((doc) => {
      //불러온 문서를 배열안에 넣어준다 => 안 넣어주면 무한으로 불러옴...
      array.push(doc);
    });
    setPrintData(array);
  };
  // const todayList = printData.map((printData) => printData.data().text);

  return (
    <div className="userPage_background">
      출력란
      {/* {todayList} */}
    </div>
  );
};
export default PrintToday;
