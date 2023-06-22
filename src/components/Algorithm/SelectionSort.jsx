//SELECTION SORT
// selection sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. 
import {
  MakeDelay,
  Primary_color,
  Swap,
  compare_color,
  delay,
  disableAllButtons,
  final_color,
  min_color,
  positional_final_color,
  swap_color,
} from "../Uitlities/utils";

export const selectionSort = async () => {
  disableAllButtons(true);
  var arr = document.querySelectorAll(".element-bar");
  document.getElementById("ssort").className = "btndisabled";
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    var mini = i;
    for (var j = i + 1; j < n; j++) {
      arr[mini].style.background = min_color;//orange
      arr[j].style.background = compare_color;//blue

      if (parseInt(arr[j].style.height) < parseInt(arr[mini].style.height)) {
        arr[mini].style.background = Primary_color;//brown
        await MakeDelay(delay);
        mini = j;
      } else {
        await MakeDelay(delay);
        arr[j].style.background = Primary_color;
      }
    }
    if (mini != i) {
      arr[i].style.background = swap_color;//red
      arr[mini].style.background = swap_color;//red
      await MakeDelay(delay);
      arr[mini].style.background = Primary_color;//brown
      arr[i].style.background = Primary_color;//brown
      Swap(arr[i], arr[mini]);
    }
    await MakeDelay(delay);
    arr[i].style.background = positional_final_color;
  }
  for (i = 0; i < n; i++) {
    await MakeDelay(delay);
    arr[i].style.background = final_color;
  }
  document.getElementById("ssort").className = "btn";
  disableAllButtons(false);
};
