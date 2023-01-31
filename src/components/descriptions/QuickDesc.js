import "../../css/description.css";

export default function QuickDesc() {
  window.onscroll = () => {
    if (window.scrollY >= 200) {
      document.getElementsByClassName("description")[0].style.opacity = 1;
    } else {
      document.getElementsByClassName("description")[0].style.opacity = 0;
    }
  };
  return (
    <div>
      <h1 className="subTitle">Quick Sort</h1>
      <hr />
      <p className="description">
        Quick sort is a divide-and-conquer sorting algorithm developed by Tony
        Hoare in 1960. It works by selecting a pivot element from the list and
        partitioning the other elements into two sublists, according to whether
        they are less than or greater than the pivot. The sublists are then
        sorted recursively, until the list is fully sorted. Quick sort is
        considered to be one of the most efficient sorting algorithms, with a
        time complexity of O(n log n) on average. It is widely used in computer
        science, particularly in the field of data analysis and large-scale data
        processing. Quick sort is often faster than merge sort in practice, due
        to its smaller memory overhead and efficient pivot selection algorithm.
        <p>
          Quick sort is a divide-and-conquer sorting algorithm. It works by
          selecting a pivot element from the list and partitioning the other
          elements into two sublists, according to whether they are less than or
          greater than the pivot. The sublists are then sorted recursively until
          the list is fully sorted.
        </p>
        <p>
          <strong>Time Complexity:</strong> O(n log n) on average, O(n^2) in the
          worst case.
        </p>
        <p>
          <strong>Space Complexity:</strong> O(log n) in the average case, O(n)
          in the worst case (for the worst case scenario, an in-place sorting
          algorithm with O(1) space complexity is required).
        </p>
        <h3>Algorithm:</h3>
        <ol>
          <li>Select a pivot element from the list.</li>
          <li>
            Partition the other elements into two sublists, according to whether
            they are less than or greater than the pivot.
          </li>
          <li>Recursively sort each sublist.</li>
          <li>
            Return the concatenation of the two sublists, with the pivot in
            between.
          </li>
        </ol>
      </p>
      <hr />
    </div>
  );
}
