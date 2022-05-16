import { useEffect,useState,useContext } from 'react';
import './App.css';
import Home from './Pages/Home'
import Login from '../src/Components/Login/Login.component'
import { UserContext } from './Contexts/UserContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TrainList  from './Components/Trains/TrainList';
function App() {

const [accessToken, setAccessToken] = useState();
  return (
    <div className="container">
      <Router>
        <UserContext.Provider value={{ accessToken, setAccessToken }}>
          <Routes>
            <Route
              path="/"
              element={accessToken ? <Navigate to="/trainList" /> : <Home />}
            />
            <Route
              path="/trainList"
              element={<TrainList token={accessToken} />}
            />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
