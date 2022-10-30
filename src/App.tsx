import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker';
import ShowData from './components/ShowList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ExpenseTracker onClose={() => { }} onTrue={() => { }} />}></Route>
          <Route path="/home" element={<ShowData />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
