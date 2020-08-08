import React, { useState } from "react";
import Login from "./components/Login";
import Books from "./components/Books";

import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const userLogin = (tok) => {
    setToken(tok);
  };
  return (
    <div className="App">
      <Login userLogin={userLogin} />
      <Books token={token} />
    </div>
  );
}

export default App;
