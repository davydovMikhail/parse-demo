import React, { useState } from 'react';
import './App.css';
import { useParse } from './hooks/useParse'; 

function App() {
  const [address, setAddress] = useState("");
  const parseHook = useParse();

  return (
    <div className="App">
      <header className="App-header">
            <input
              value={address} 
              onChange={(e) => {setAddress(e.target.value)}} 
              type="text"
              style={{width: "340px"}} 
            />
            <button
              onClick={() => {parseHook(address)}}
            >
                parse
            </button>
      </header>
    </div>
  );
}

export default App;
