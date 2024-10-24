
import React from'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Homepage';

function App() {
  return (
    <div className="App">
       <Navbar />
      <div classname= "content">
        <Home />
      </div>
    </div>
  );
}
export default App;
