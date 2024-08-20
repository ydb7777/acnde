import { useEffect, useMemo, useState } from "react";

function slowFunction(n) {
  console.log('slow function');
  for (let i = 0; i < 1000000000; i++) {}
  return n * 2;
}
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // now when we change the them, it wont rerun the slowFunction coz number is not changing so
  // it will directly serve from the memory=> fast
  console.log('Component Render...');

  // const doubleNumber = slowFunction(number);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // const themeStyle = useMemo(() => {
  //   return {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };
  // },[dark]);

  // Define themeStyle as a regular object
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  // now on changing the number also , it will run the useEffect coz themeStyle get change, basically its referenc
  // gets change on every render so we have to use useMemo so that if value dont change it wont
  // call useEffect
  // useEffect(() => {
  //   console.log("theme changes!!!");
  // }, [dark]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <br></br>
      <button onClick={() => setDark((preDark) => !preDark)}>
        Theme Change
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}

export default App;
