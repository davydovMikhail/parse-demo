import React, { useState } from 'react';
import './App.css';

function App() {
  const [address, setAddress] = useState("");


  return (
    <div className="App">
      <header className="App-header">
            <input
              value={address} 
              onChange={(e) => {setAddress(e.target.value)}} 
              type="text"
              style={{width: "340px"}} 
            />
            <button>
                parse
            </button>
      </header>
    </div>
  );
}

export default App;
