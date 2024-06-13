import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Expenses from './Components/Expenses';
import AddItem from './Components/Expenses/AddItem';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/expenses" component={Expenses} />
          <Route path="/add-item" component={AddItem} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
