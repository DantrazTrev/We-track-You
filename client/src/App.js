
import './App.css';
import React, { useEffect } from 'react'
function App() {

  useEffect(() => {
    let cookie = false
    if (navigator.cookieEnabled)
      cookie = true
    let tracker = { width: window.innerWidth, height: window.innerHeight, cookie }

    fetch("/track", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tracker)
    })
      .then((res) => res.json())
      .then((data) => console.log({ ...data, ...tracker }));

  }, []);
  return (
    <div className="App">
      <button>Give me all your money</button>

    </div>
  );
}

export default App;
