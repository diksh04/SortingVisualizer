import React, { useState, useEffect } from "react";
import "./SortingComponent.css";
import {
  Primary_color,
  changeDelay,
  randomNumberFrom,
  delay,
} from "../Uitlities/utils";
import { bubbleSort } from "../Algorithm/BubbleSort";
import { selectionSort } from "../Algorithm/SelectionSort";
import { insertionSort } from "../Algorithm/InsertionSort";
import { mergeSort } from "../Algorithm/MergeSort";
import { quickSort } from "../Algorithm/QuickSort";
const SortingComponent = () => {
  const [arr, setArr] = useState([]);
  const [arrSize, setArrSize] = useState(50); //initial array size
  const [wid, setWid] = useState(9); //initial width of bar

  const resetArr = () => {
    var arr = [];
    for (var i = 0; i < arrSize; i++) {
      arr.push(randomNumberFrom(8, 650)); // initial 50 size ke array mai random no. dal raha hai ye fnc
    }
    setArr(arr);
    var elem = document.querySelectorAll(".element-bar");
    for (i = 0; i < elem.length; i++) {
      elem[i].style.background = Primary_color;
    }
  };
  useEffect(() => {
    resetArr();
  }, []);

  const setArraySizeHandler = (val) => {
    console.log(val);
    if (val > 100) {
      setWid(2);
    } else if (val > 80) {
      setWid(5);
    } else if (val > 70) {
      setWid(7);
    } else if (val > 60) {
      setWid(10);
    } else if (val > 50) {
      setWid(15);
    } else if (val > 40) {
      setWid(19);
    } else if (val > 30) {
      setWid(25);
    } else if (val > 20) {
      setWid(33);
    } else if (val > 10) {
      setWid(40);
    } else {
      setWid(60);
    }
    setArrSize(val);
    resetArr();
  };

  return (
    <div>
      <div className="sideNavbar">
        <h3>Sorting Visualiser</h3>
        <label>
          Array Size
          <br />
          <input
            id="rangeSlider"
            type="range"
            min="5"
            max="200"
            value={arrSize}
            onChange={(e) => setArraySizeHandler(e.target.value)}
          />
        </label>
        <br />
        <label>
          Delay
          <br />
          <input
            type="range"
            min="5"
            max="2000"
            onChange={(e) => {
              changeDelay(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <div>
          <button className="btn" onClick={resetArr}>
            Generate array
          </button>
        </div>
        <div>
          <button className="btn" id="msort" onClick={mergeSort}>
            mergeSort Sort
          </button>
        </div>
        <div>
          <button className="btn" id="qsort" onClick={quickSort}>
            Quick Sort
          </button>
        </div>
        <div>
          <button className="btn" id="bsort" onClick={bubbleSort}>
            Bubble Sort
          </button>
        </div>
        <div>
          <button className="btn" id="ssort" onClick={selectionSort}>
            Selection Sort
          </button>
        </div>
        <div>
          <button className="btn" id="isort" onClick={insertionSort}>
            Insertion Sort
          </button>
        </div>

        <div className="array">
          {arr.map((val, idx) => (
            <div
              className="element-bar"
              key={idx}
              style={{
                height: `${val}px`,
                width: `${wid}px`,
                backgroundColor: Primary_color,
                WebkitTransition: `background-color ${delay}ms linear`,
                msTransition: `background-color ${delay}ms linear`,
                transition: `background-color ${delay}ms linear`,
                transition: `${delay}ms`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingComponent;
