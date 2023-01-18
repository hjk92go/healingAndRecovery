import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import Guest from './pages/Guest';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/UserPage' element={<UserPage/>} />
          <Route path='/Guest' element={<Guest/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
