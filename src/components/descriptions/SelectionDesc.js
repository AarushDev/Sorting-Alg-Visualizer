import "../../css/description.css";
import Footer from "../Footer";

export default function SelectionDesc() {
  window.onscroll = () => {
    if (window.scrollY >= 200) {
      document.getElementsByClassName("description")[0].style.opacity = 1;
    } else {
      document.getElementsByClassName("description")[0].style.opacity = 0;
    }
  };
  return (
    <div>
      <h1 className="subTitle">Selection Sort</h1>
      <hr />
      <div className="description">
        <p className="description">
          Selection sort is a simple comparison-based sorting algorithm that was
          developed by Tony Hoare in 1959. It works by repeatedly selecting the
          minimum element from the unsorted portion of the list and swapping it
          with the first element of the unsorted portion. This algorithm is not
          frequently used in practice because its time complexity is O(n^2),
          making it inefficient for large lists. However, it can be useful for
          educational purposes or in small lists, as it is simple to understand
          and implement. The algorithm was one of the first sorting algorithms
          to be studied, and it laid the foundation for the development of more
          efficient sorting algorithms such as quicksort and merge sort.
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
              elements of the sorted sublist one position ahead if they are
              larger than the picked element, until finding the correct position
              for the picked element.
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
        <Footer />
      </div>
    </div>
  );
}
