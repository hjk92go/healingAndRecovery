import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Guest from "./pages/Guest";
import { DataProvider } from "./data/ScriptFile";

function App() {
  return (
    <div>
      {/*dataProvider 감싸야 data파일을 읽어올수있다. */}
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserPage" element={<UserPage />} />
            <Route path="/Guest" element={<Guest />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
