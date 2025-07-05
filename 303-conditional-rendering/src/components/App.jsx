import React from "react";
import LoginForm from "./login";

var isloggedIn=false;
function App() {
  return (
    <div className="container">
    {isloggedIn ? <h1>Hello</h1> : <LoginForm/>}  
    </div>
  );
}

export default App;
