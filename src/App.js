import "./css/App.css";
import React from "react";
import MainNav from "./components/Nav";
import Main from "./components/Main";
import BubbleDesc from "./components/descriptions/bubbleDesc";
import InsertionDesc from "./components/descriptions/InsertionDesc";
import SelectionDesc from "./components/descriptions/SelectionDesc";
import MergeDesc from "./components/descriptions/MergeDesc";
import QuickDesc from "./components/descriptions/QuickDesc";

function App() {
  const [curAlg, setCurAlg] = React.useState("bubbleSort");
  let [array, setArray] = React.useState([]);
  let [displayArray, setDisplayArray] = React.useState([]);
  let [update, setUpdate] = React.useState(false);
  let [speed, setSpeed] = React.useState(1);
  let [size, setSize] = React.useState(100);

  React.useEffect(() => {
    randomize();
    document.getElementsByClassName("textContainer")[0].style.opacity = 1;
  }, [size]);

  React.useEffect(() => {
    let count = 0;
    displayArray = array.map((ele) => (
      <div
        key={count}
        id={count++}
        style={{
          height: ele * 7,
          backgroundColor: "#081172",
          width:
            size < 100
              ? 25 - (size / 10 - 0.5)
              : size >= 100 && size <= 160
              ? 15 - ((size / 10) % 10)
              : 7,
          display: "inline-block",
          margin: "0 1px",
          transition: "width 2s, height 1.5s",
          whiteSpace: "nowrap",
        }}
      >
        &nbsp;
      </div>
    ));
    setDisplayArray(displayArray);
  }, [update]);

  function randomize() {
    array = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * (100 - 1 + 1) + 1));
    }
    setUpdate((prevState) => !prevState);
    setArray(array);
  }

  function clear() {
    window.location.reload();
  }

  function speedSizeSelect(event) {
    if (event.target.name === "speed") {
      setSpeed((1 / event.target.value) * 25);
    } else {
      setSize(event.target.value);
      console.log(event.target.value);
    }
  }

  async function changeAlg(event) {
    document.getElementsByClassName("textContainer")[0].style.opacity = 0;
    await new Promise((r) => setTimeout(r, 1000));
    document.getElementsByClassName("textContainer")[0].style.opacity = 1;
    setCurAlg(`${event}`);
  }

  return (
    <div className="App">
      <MainNav
        curAlg={curAlg}
        changeAlg={changeAlg}
        randomize={randomize}
        clear={clear}
        displayArray={displayArray}
        array={array}
        size={size}
        speed={speed}
        update={update}
        setDisplayArray={setDisplayArray}
        setArray={setArray}
        setUpdate={setUpdate}
        speedSizeSelect={speedSizeSelect}
      />
      <div className="container">
        <div className="mainContent">
          <Main
            displayArray={displayArray}
            array={array}
            size={size}
            speed={speed}
            update={update}
            curAlg={curAlg}
          />
        </div>
        <div className="textContainer">
          {curAlg === "bubbleSort" && <BubbleDesc />}
          {curAlg === "insertionSort" && <InsertionDesc />}
          {curAlg === "selectionSort" && <SelectionDesc />}
          {curAlg === "mergeSort" && <MergeDesc />}
          {curAlg === "quickSort" && <QuickDesc />}
        </div>
      </div>
    </div>
  );
}

export default App;
