import "../../css/description.css";

export default function InsertionDesc() {
  window.onscroll = () => {
    if (window.scrollY >= 200) {
      document.getElementsByClassName("description")[0].style.opacity = 1;
    } else {
      document.getElementsByClassName("description")[0].style.opacity = 0;
    }
  };
  return (
    <div>
      <h1 className="subTitle">Insertion Sort</h1>
      <hr />
      <p className="description">
        Insertion sort is a simple sorting algorithm that was first described by
        John W. Tukey in the early 1950s. It is based on the idea of building up
        a sorted list one element at a time, by inserting each element into its
        proper position in the sorted list. This algorithm is often used as an
        introduction to sorting algorithms in computer science education.
        Insertion sort is also used in practice when the data being sorted is
        small, nearly sorted, or when the number of writes is a concern, as it
        makes very few writes compared to other sorting algorithms.
        <p>
          Insertion sort is an in-place comparison-based sorting algorithm. It
          works by iterating through the list, growing a sorted sublist, and
          inserting each unsorted element into its correct position within the
          sorted sublist.
        </p>
        <p>
          <strong>Time Complexity:</strong> O(n<sup>2</sup>) in the worst case
          and O(n) in the best case (when the list is already sorted).
        </p>
        <p>
          <strong>Space Complexity:</strong> O(1) as it sorts the elements in
          place, only using a constant amount of extra memory.
        </p>
        <h3>Algorithm:</h3>
        <ol>
          <li>Set the first element of the list as the sorted sublist.</li>
          <li>Pick the next unsorted element.</li>
          <li>
            Compare it with the elements in the sorted sublist, moving the
            elements of the sorted sublist one position ahead if they are larger
            than the picked element, until finding the correct position for the
            picked element.
          </li>
          <li>
            Insert the picked element into its correct position in the sorted
            sublist.
          </li>
          <li>Repeat steps 2-4 for all unsorted elements.</li>
          <li>The list is now sorted.</li>
        </ol>
      </p>
      <hr />
    </div>
  );
}
