// QUICK SORT
// QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.

import {
  MakeDelay,
  Primary_color,
  compare_color,
  delay,
  disableAllButtons,
  final_color,
  min_color,
  positional_final_color,
  randomNumberFrom,
  swap_color,
  Swap
} from "../Uitlities/utils";

export const partition = async (arr, left, right) => {
  var n = randomNumberFrom(left, right);
  Swap(arr[n], arr[right]);

  await MakeDelay(delay);
  arr[right].style.background = min_color; // color of pivot color

  var j = left;
  var pivot = right;

  for (var i = left; i < right; i++) 
  {
    arr[i].style.background = compare_color;
    if(parseInt(arr[i].style.height) < parseInt(arr[pivot].style.height))
    {
        arr[j].style.background = compare_color;
        await MakeDelay(delay);
        Swap(arr[i],arr[j]);
        
        await MakeDelay(delay);
        arr[i].style.background = swap_color;
        arr[j].style.background = swap_color;
        if(j!=left)
        {
            arr[j-1].style.background = Primary_color;
        }
        j+=1;
    }
    await MakeDelay(delay);
    arr[i].style.background = Primary_color;
    arr[i].style.background = Primary_color;
  }
  arr[right].style.background = Primary_color;
  await MakeDelay(delay);
  Swap(arr[j],arr[pivot]);
  await MakeDelay(delay);
  arr[j].style.background = positional_final_color;
  return j;
};
export const quickSortHelper = async (arr, left, right) => {
  if (left >= right) {
    if (left == right) {
      arr[left].style.background = positional_final_color;
    }
    return;
  }
  var pivot = await partition(arr, left, right);
  await quickSortHelper(arr, left, pivot - 1);
  await quickSortHelper(arr, pivot + 1, right);
};
export const quickSort = async () => {
  disableAllButtons(true);
  document.getElementById("qsort").className = "btndisabled";

  var arr = document.querySelectorAll(".element-bar");
  var n = arr.length;
  await quickSortHelper(arr, 0, n - 1);
  for (var i = 0; i < n; i++) {
    await MakeDelay(delay);
    arr[i].style.background = final_color;
  }
  document.getElementById("qsort").className = "btn";
  disableAllButtons(false);
};
