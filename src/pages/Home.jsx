import { Link } from "react-router-dom";
import GetFirebase from "../components/PrintToday";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <div>
      <h1>당신을 항상 응원합니다.</h1> <br />
      <Link to="/Userpage">회원</Link>
      <br />
      <Link to="/Guest">비회원</Link>
    </div>
  );
};

export default Home;
