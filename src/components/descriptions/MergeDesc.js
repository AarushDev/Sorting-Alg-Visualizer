import "../../css/description.css";

export default function MergeDesc() {
  window.onscroll = () => {
    if (window.scrollY >= 200) {
      document.getElementsByClassName("description")[0].style.opacity = 1;
    } else {
      document.getElementsByClassName("description")[0].style.opacity = 0;
    }
  };
  return (
    <div>
      <h1 className="subTitle">Merge Sort</h1>
      <hr />
      <p className="description">
        Merge sort is a divide-and-conquer sorting algorithm developed by John
        von Neumann in 1945. It works by recursively dividing the unsorted list
        into smaller sublists until each sublist has only one element, and then
        merging these sublists back into one sorted list. Merge sort is
        considered to be one of the most efficient sorting algorithms, with a
        time complexity of O(n log n). It is widely used in computer science,
        particularly in the field of data analysis and large-scale data
        processing. Despite its efficiency, merge sort can require a large
        amount of memory compared to other sorting algorithms, making it less
        suitable for systems with limited memory resources.
        <p>
          Merge sort is a divide-and-conquer sorting algorithm. It works by
          recursively dividing the unsorted list into smaller sublists until
          each sublist has only one element, and then merging these sublists
          back into one sorted list.
        </p>
        <p>
          <strong>Time Complexity:</strong> O(n log n) in the worst case,
          average case, and best case.
        </p>
        <p>
          <strong>Space Complexity:</strong> O(n) as it requires additional
          memory proportional to the size of the list to store the sublists
          while merging.
        </p>
        <h3>Algorithm:</h3>
        <ol>
          <li>If the list has only one element, return the list.</li>
          <li>
            Divide the unsorted list into two sublists of roughly equal size.
          </li>
          <li>Recursively sort each sublist by repeating steps 1 and 2.</li>
          <li>Merge the two sublists back into one sorted list.</li>
          <li>Return the sorted list.</li>
        </ol>
      </p>
      <hr />
    </div>
  );
}
