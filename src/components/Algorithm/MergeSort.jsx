// MERGE SORT
// merge sort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.
import {
  MakeDelay,
  Primary_color,
  Swap,
  compare_color,
  delay,
  disableAllButtons,
  final_color,
  positional_final_color,
  swap_color,
} from "../Uitlities/utils";
var n;
function gap(g) {
  if (g <= 1) {
    return 0;
  }
  return parseInt(Math.ceil(g / 2.0));
}

async function merge(arr, left, right) {
  var g = gap(right - left + 1);

  for (var i = left; i <= right; i++) {
    await MakeDelay(20);
    arr[i].style.background = compare_color;
  }

  for (g; g > 0; g = gap(g)) {
    for (i = left; i + g <= right; i++) {
      var j = i + g;
      arr[i].style.background = compare_color;
      arr[j].style.background = compare_color;
      await MakeDelay(delay);
      if (parseInt(arr[i].style.height) > parseInt(arr[j].style.height)) {
        arr[i].style.background = swap_color;
        arr[j].style.background = swap_color;
        await MakeDelay(delay);
        Swap(arr[i], arr[j]);
      }
      await MakeDelay(delay);
      if (right == n && left == 0) {
        arr[i].style.background = positional_final_color;
        arr[j].style.background = positional_final_color;
      } else {
        arr[i].style.background = Primary_color;
        arr[j].style.background = Primary_color;
      }
    }
  }
}
const mergeSortHelper = async (arr, left, right) => {
  if (left >= right) {
    return;
  }
  var mid = left + parseInt((right - left) / 2);
  await mergeSortHelper(arr, left, mid);
  await mergeSortHelper(arr, mid + 1, right);
  await merge(arr, left, right);
  return;
};
export const mergeSort = async () => {
  disableAllButtons(true);
  document.getElementById("msort").className = "btndisabled";

  var arr = document.querySelectorAll(".element-bar");
  n = arr.length;
  await mergeSortHelper(arr, 0, n - 1);
  for (var i = 0; i < n; i++) {
    await MakeDelay(delay);
    arr[i].style.background = final_color;
  }
  document.getElementById("msort").className = "btn";
  disableAllButtons(false);
};
