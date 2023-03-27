import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./data/ScriptFile";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Guest from "./pages/Guest";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import style from "./css/App.module.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <img className={style.body} src={require("./img/backgroundIMG_1.jpg")} />
      {/*dataProvider 감싸야 data파일을 읽어올수있다. */}
      <DataProvider>
          
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserPage" element={<UserPage />} />
            <Route path="/Guest" element={<Guest />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
