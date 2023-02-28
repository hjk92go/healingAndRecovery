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
  const [printData, setPrintData] = useState();
  const readToday = async () => {
    // today콜렉션의 모든 데이터를 불러는 쿼리, 불러올 데이터에 조건을 넣고싶으면 where 사용해준다.
    const readDB = query(collection(db, "today"));
    //가져온 데이터를 쿼리스냅샷에 넣은다음 불러온다.
    const querySnapshop = await getDocs(readDB);
    let array = [];
    querySnapshop.forEach((doc) => {
      //불러온 문서를 배열안에 넣어준다 => 안 넣어주면 무한으로 불러옴...
      array.push(doc.data().text);
      console.log("doc", doc.data().text);
    });
    //배열을 state에 넣어준다.
    setPrintData(array);

    console.log("printData", printData);
  };

  // console.log(printData);
  // console.log(printData.map((printData) => printData.text));
  //빈배열이 실행될때, 안의 함수를 실행시킨다는 의미. 빈배열안에 어떤 함수를 넣는다면 그 함수가 실행되고, 빈배열로 뒀을때는 현재 컴포넌트가 실행될때라는 의미
  useEffect(() => {
    readToday();
  }, []);

  // console.log(printData);
  // console.log(printData.map((printData) => printData.data().text));
  //새로운 데이터 추가시 실행이 되지않고, 에러가 뜸.
  //업데이트가 바로 반영이 안되는듯함 => 어차피 전체 목록보기는 클릭시 새로운페이지에서 출력 예정. 괜찮을것같긴함..... 랜덤 text 출력 => id값으로 출력 하는 함수를 만들어서 출력 시도 해볼것

  return (
    <div>
      지금까지 쓴 내용 보러가기
      <Modal toss={printData} />
    </div>
  );
};
export default PrintToday;
