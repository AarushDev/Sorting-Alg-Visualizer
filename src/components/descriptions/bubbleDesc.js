import "../../css/description.css";

export default function BubbleDesc() {
  window.onscroll = () => {
    if (window.scrollY >= 200) {
      document.getElementsByClassName("description")[0].style.opacity = 1;
    } else {
      document.getElementsByClassName("description")[0].style.opacity = 0;
    }
  };
  return (
    <div className="descContainer">
      <h1 className="subTitle">Bubble Sort</h1>
      <hr />
      <p className="description">
        Bubble sort is a simple sorting algorithm that was first implemented in
        the early 1950s. The algorithm gets its name from the way smaller
        elements "bubble" to the top of the list, like bubbles rising to the
        surface of a liquid. The concept of the algorithm is simple and is often
        used to teach novice programmers, as it provides a basic understanding
        of sorting algorithms and how they work. Over the years, bubble sort has
        been largely replaced by more efficient sorting algorithms, such as
        quicksort and merge sort, but it remains a useful educational tool and
        is still used in certain specialized applications where its simplicity
        is an advantage.
        <br />
        <br />
        <p>
          Bubble sort is a simple comparison-based sorting algorithm. It works
          by repeatedly swapping adjacent elements if they are in the wrong
          order, until the list is sorted.
        </p>
        <p>
          <strong>Time Complexity:</strong> O(n<sup>2</sup>) in the worst and
          average case, and O(n) in the best case (when the list is already
          sorted).
        </p>
        <p>
          <strong>Space Complexity:</strong> O(1) as it sorts the elements in
          place, only using a constant amount of extra memory.
        </p>
        <h3>Algorithm:</h3>
        <ol>
          <li>Repeat steps 2-4 for the length of the list, n.</li>
          <li>Compare the first two elements of the list.</li>
          <li>If they are in the wrong order, swap them.</li>
          <li>Move to the next pair of elements and repeat step 3.</li>
          <li>
            The largest element "bubbles up" to the end of the list after each
            iteration.
          </li>
          <li>
            Repeat steps 2-5 until no more swaps are needed, the list is now
            sorted.
          </li>
        </ol>
      </p>
      <hr />
    </div>
  );
}
