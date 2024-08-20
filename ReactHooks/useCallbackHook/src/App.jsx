import { useCallback, useState } from "react";
import List from "./List";

function App() {
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [num, num + 1, num + 2];
  // };
  const getItems = useCallback((increment) => {
    return [num+increment, num + 1+increment, num + 2+increment];
  },[num]);

  const themeClass = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "black" : "while",
  };

  return (
    <div style={themeClass}>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(+e.target.value)}
      ></input>
      <button onClick={() => setDark((pre) => !pre)}>Toggle Theme</button>
      <List getItems={getItems}/>
    </div>
  );
}

export default App;
