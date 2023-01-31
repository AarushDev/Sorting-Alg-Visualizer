export default async function insertionSort(
  array,
  displayArray,
  speed,
  setDisplayArray,
  setUpdate,
  setArray
) {
  for (let i = 0; i < array.length - 1; ++i) {
    let j = i;
    while (j >= 0 && array[j] > array[j + 1]) {
      document.getElementById(j).style.backgroundColor = "#E4A11B";
      document.getElementById(j + 1).style.backgroundColor = "#DC4C64";
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
      document.getElementById(j).style.backgroundColor = "#081172";
      document.getElementById(j + 1).style.backgroundColor = "#081172";
      j -= 1;
    }
  }
  for (let i = 0; i < array.length; ++i) {
    document.getElementById(i).style.backgroundColor = "#59788E";
    await new Promise((r) => setTimeout(r, speed));
  }
}
