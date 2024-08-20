import { useState } from "react";
import "./App.css";
function fun() {
  console.log("Constructor will each time when component will render");
  return 4;
}
function App() {
  //1: general
  // const [count,setCount]=useState(4);
  //2: this useState constructor will run on every render
  // const [count1, setCount] = useState(fun());
  //3: this useState constuctor will run only one time ..
  const [count, setCount] = useState(() => {
    return 5;
  });
  // 3: setState having object ie object as a state
  // const [state,setState]=useState({num:6,label:'green'});
  // const num=state.num;
  // const label=state.label;

  //1: function decreament() {
  //   setCount(count - 1);
  //   setCount(count - 1);
  //   setCount(count - 1);
  // }
  // 2: 
  function decreament() {
    setCount((preCount) => preCount - 1);
    setCount((preCount) => preCount - 1);
    setCount((preCount) => preCount - 1);
  }
  // 1: 
  function increamet() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  // 2: 
  // function increamet2(){
  //   setCount((a)=>a+1);
  //   setCount((b)=>b+1);
  //   setCount((c)=>c+1);
  // }
  return (
    <>
      <div class="flex items-center space-x-4 p-4 bg-white rounded shadow">
        <button
          // Correct Approach: onClick={() => incrementCount()} ensures incrementCount is called only when the button is clicked.
          // Incorrect Approach: onClick={incrementCount()} calls incrementCount immediately during the render, potentially causing infinite re-renders in React.
          onClick={() => decreament()}
          class="px-3 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span>Value: {count}</span>
        <button
          onClick={increamet}
          class="px-3 py-1 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
