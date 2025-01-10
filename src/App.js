import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LeftSide from './component/leftside';
import MiddleSide from './component/middleSide';
import RightSide from './component/rightSide';
import ProfilePage from './component/ProfilePage';
import ChatPage from './component/ChatPage'; // Import ChatPage component

function App() {
  return (
    <Router>
      <div className="App">
        <div className="leftSideHome">
          <LeftSide />
        </div>
        <div className="middleSide">
          <Routes>
            <Route path="/" element={<MiddleSide />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/chat/:username" element={<ChatPage />} /> {/* Add ChatPage route */}
          </Routes>
        </div>
        <div className="rightSide">
          <RightSide />
        </div>
      </div>
    </Router>
  );
}

export default App;
