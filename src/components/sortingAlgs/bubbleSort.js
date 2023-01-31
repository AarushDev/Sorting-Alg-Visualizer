export default async function bubbleSort(
  array,
  displayArray,
  speed,
  setDisplayArray,
  setUpdate,
  setArray
) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      document.getElementById(j).style.backgroundColor = "#E4A11B";
      document.getElementById(j + 1).style.backgroundColor = "#DC4C64";
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        temp = displayArray[j];
        displayArray[j] = displayArray[j + 1];
        displayArray[j + 1] = temp;
        setDisplayArray(displayArray);
        setUpdate((prevState) => !prevState);
        setArray(array);
        await new Promise((r) => setTimeout(r, speed));
      }
      document.getElementById(j).style.backgroundColor = "#081172";
      document.getElementById(j + 1).style.backgroundColor = "#081172";
    }
    document.getElementById(array.length - i - 1).style.backgroundColor =
      "#63c5da";
  }
  document.getElementById(0).style.backgroundColor = "#63c5da";
  setDisplayArray(displayArray);
  setUpdate((prevState) => !prevState);
  setArray(array);
  for (let i = 0; i < array.length; ++i) {
    document.getElementById(i).style.backgroundColor = "#59788E";
    await new Promise((r) => setTimeout(r, speed));
  }
}
