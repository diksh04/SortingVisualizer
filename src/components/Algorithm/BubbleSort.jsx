// BUBBLE SORT
/*Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed.*/
import {
  Primary_color,
  Swap,
  compare_color,
  delay,
  disableAllButtons,
  final_color,
  swap_color,
  MakeDelay,
  positional_final_color,
} from "../Uitlities/utils";
export const bubbleSort = async () => {
  disableAllButtons(true);
  var arr = document.querySelectorAll(".element-bar");
  document.getElementById("bsort").className = "btndisabled";
  var n = arr.length;
  for (
    var i = 0;
    i < n - 1;
    i++ //no. of pases
  ) {
    for (var j = 0; j < n - i - 1; j++) {
        
      arr[j].style.background = compare_color;
      arr[j + 1].style.background = compare_color;

      if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
        await MakeDelay(delay);
        arr[j].style.background = swap_color;
        arr[j + 1].style.background = swap_color;
        Swap(arr[j], arr[j + 1]);
      }
      await MakeDelay(delay);
      arr[j].style.background = Primary_color;
      arr[j + 1].style.background = Primary_color;
    }
    await MakeDelay(delay);
    arr[n - i - 1].style.background = positional_final_color;
  }
  for (var i = 0; i < n; i++) {
    await MakeDelay(delay);
    arr[i].style.background = final_color;
  }
  document.getElementById("bsort").className = "btn";
  disableAllButtons(false);
};
