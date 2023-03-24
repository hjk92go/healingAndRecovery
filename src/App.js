import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./data/ScriptFile";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Guest from "./pages/Guest";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrintToday from "./components/PrintToday";
import {} from "./css/App.css";

function App() {
  return (
    <div>
      <img src={require("./img/backgroundIMG_1.jpg")} />
      {/*dataProvider 감싸야 data파일을 읽어올수있다. */}
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserPage" element={<UserPage />} />
            <Route path="/Guest" element={<Guest />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
