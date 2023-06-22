// INSERTION SORT
// Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

import { MakeDelay, Swap, compare_color, delay, disableAllButtons, final_color, min_color, positional_final_color, swap_color } from "../Uitlities/utils";

export const insertionSort = async () => {
  disableAllButtons(true);
  var arr = document.querySelectorAll(".element-bar");
  document.getElementById("isort").className = "btndisabled";

  var n = arr.length;

  for (var i = 0; i < n; i++) {
    for(var j=i;j>=1;j--)
    {
        arr[i].style.background = min_color;//orange
        arr[j].style.background = compare_color;//blue;

        await MakeDelay(delay);
        if(parseInt(arr[j].style.height) < parseInt(arr[j-1].style.height))
        {
            arr[j].style.background = swap_color;//red
            arr[j-1].style.background = swap_color;//red
            await MakeDelay(delay);
            Swap(arr[j-1],arr[j]);
        }
        else
        {
            await MakeDelay(delay);
            arr[j].style.background = positional_final_color;//pink
            arr[j-1].style.background = positional_final_color;
            break;
        }
        await MakeDelay(delay);
        arr[j].style.background = positional_final_color;
        arr[j-1].style.background = positional_final_color;
    }
  }
  for(i = 0;i<n;i++)
  {
    await MakeDelay(delay);
    arr[i].style.background = final_color;
  }
  document.getElementById('isort').className = 'btn';
  disableAllButtons(false);
};
