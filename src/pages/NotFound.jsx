import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import not from "../css/NotFound.module.css";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigator = useNavigate();
  return (
    <div className={not.div404}>
      <button
        className={not.home}
        onClick={() => {
          navigator(-1);
        }}>
        Go Back
        <FontAwesomeIcon className={not.arrow} icon={faCircleArrowLeft} />
      </button>
      <img className={not.img404} src={require("../img/NotFound.jpg")} />
      <a
        className={not.source}
        href="https://kr.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_13315300.htm#query=404%20error&position=0&from_view=keyword&track=ais">
        출처 : Freepik / 작가 : storyset
      </a>
    </div>
  );
};

export default NotFound;
