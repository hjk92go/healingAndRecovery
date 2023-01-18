import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <Link to='/Userpage'>회원</Link>
            <br />
            <Link to='/Guest'>비회원</Link>
        </div>
     );
}
 
export default Home;