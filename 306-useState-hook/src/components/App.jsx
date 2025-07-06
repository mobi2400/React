import React,{useState} from "react";

function App() {
   const [count,statecount] =useState(0);
  
function increease(){
//count++;
}
    return  <div className="container">
      <h1>{count}</h1>
      <button onClick={()=>{ statecount(count+1)}}>+</button>
    </div>  

}
export default App;
