import {
  Navbar,
  Button,
  ButtonGroup,
  Dropdown,
  SplitButton,
  DropdownButton,
  Form,
} from "react-bootstrap";
import "../css/Nav.css";
import bubbleSort from "./sortingAlgs/bubbleSort";
import selectionSort from "./sortingAlgs/selectionSort";
import insertionSort from "./sortingAlgs/insertionSort";
import mergeSort from "./sortingAlgs/mergeSort";
import quickSort from "./sortingAlgs/quickSort";

function MainNav(props) {
  function algSelect(alg) {
    if (alg === "bubbleSort") {
      bubbleSort(
        props.array,
        props.displayArray,
        props.speed,
        props.setDisplayArray,
        props.setUpdate,
        props.setArray
      );
    } else if (alg === "selectionSort") {
      selectionSort(
        props.array,
        props.displayArray,
        props.speed,
        props.setDisplayArray,
        props.setUpdate,
        props.setArray
      );
    } else if (alg === "insertionSort") {
      insertionSort(
        props.array,
        props.displayArray,
        props.speed,
        props.setDisplayArray,
        props.setUpdate,
        props.setArray
      );
    } else if (alg === "mergeSort") {
      console.log(
        mergeSort(
          props.array,
          props.displayArray,
          props.speed,
          props.setDisplayArray,
          props.setUpdate,
          props.setArray
        )
      );
    } else if (alg === "quickSort") {
      quickSort(
        props.array,
        props.displayArray,
        props.speed,
        props.setDisplayArray,
        props.setUpdate,
        props.setArray
      );
    }
  }
  return (
    <Navbar bg="light" variant="light" className="nav">
      <Navbar.Brand className="title">
        Sorting Algorithm Visualizer
      </Navbar.Brand>
      <div className="select">
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="outline-secondary"
          menuVariant="dark"
          title="Algorithm"
          className="selectItem"
          onSelect={(event) => props.changeAlg(event)}
        >
          <Dropdown.Item eventKey="bubbleSort">Bubble Sort</Dropdown.Item>
          <Dropdown.Item eventKey="selectionSort">Selection Sort</Dropdown.Item>
          <Dropdown.Item eventKey="insertionSort">Insertion Sort</Dropdown.Item>
          <Dropdown.Item eventKey="mergeSort">Merge Sort</Dropdown.Item>
          <Dropdown.Item eventKey="quickSort">Quick Sort</Dropdown.Item>
        </DropdownButton>
        <Button
          variant="outline-secondary"
          className="selectItem, bigbutton"
          onClick={props.randomize}
        >
          Generate Array
        </Button>
        <Button
          variant="outline-secondary"
          className="selectItem"
          onClick={() => algSelect(props.curAlg)}
        >
          Sort
        </Button>
        <Button
          variant="outline-secondary"
          className="selectItem"
          onClick={props.clear}
        >
          Reset
        </Button>
        <Form.Label className="label">Speed</Form.Label>
        <Form.Range
          variant="outline-secondary"
          className="selectItem"
          min={0.25}
          max={4.0}
          step={0.25}
          name="speed"
          onChange={props.speedSizeSelect}
        />
        <Form.Label className="label">Size</Form.Label>
        <Form.Range
          variant="outline-secondary"
          className="selectItem"
          min={10}
          max={200}
          step={10}
          name="size"
          onChange={props.speedSizeSelect}
        />
        <Form.Label>{props.size}</Form.Label>
      </div>
    </Navbar>
  );
}

export default MainNav;
