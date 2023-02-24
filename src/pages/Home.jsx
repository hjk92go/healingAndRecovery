import { Link } from "react-router-dom";
import GetFirebase from "../components/GetFirebase";
import SignUp from "../components/SignUp";

const Home = () => {
  return (
    <div>
      <Link to="/Userpage">회원</Link>
      <br />
      <Link to="/Guest">비회원</Link>
      <SignUp />
      <GetFirebase />
    </div>
  );
};

export default Home;
