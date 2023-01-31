export default async function selectionSort(
  array,
  displayArray,
  speed,
  setDisplayArray,
  setUpdate,
  setArray
) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      document.getElementById(min).style.backgroundColor = "#E4A11B";
      document.getElementById(j).style.backgroundColor = "#DC4C64";
      await new Promise((r) => setTimeout(r, speed));
      if (array[j] < array[min]) {
        document.getElementById(min).style.backgroundColor = "#081172";
        min = j;
      }
      document.getElementById(j).style.backgroundColor = "#081172";
      document.getElementById(min).style.backgroundColor = "#E4A11B";
      await new Promise((r) => setTimeout(r, speed));
    }
    document.getElementById(min).style.backgroundColor = "#E4A11B";
    document.getElementById(i).style.backgroundColor = "#DC4C64";
    let tmp = array[i];
    array[i] = array[min];
    array[min] = tmp;
    tmp = displayArray[i];
    displayArray[i] = displayArray[min];
    displayArray[min] = tmp;
    setDisplayArray(displayArray);
    setUpdate((prevState) => !prevState);
    setArray(array);
    await new Promise((r) => setTimeout(r, speed));
    document.getElementById(min).style.backgroundColor = "#E4A11B";
    document.getElementById(i).style.backgroundColor = "#63c5da";
  }
  setDisplayArray(displayArray);
  setUpdate((prevState) => !prevState);
  setArray(array);
  for (let i = 0; i < array.length; ++i) {
    document.getElementById(i).style.backgroundColor = "#63c5da";
    await new Promise((r) => setTimeout(r, speed));
  }
}
