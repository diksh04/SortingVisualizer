export function Swap(x, y) {
  const temp = x.style.height;
  x.style.height = y.style.height;
  y.style.height = temp;
}
export function MakeDelay(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

export function randomNumberFrom(l, r) {
  return Math.floor(Math.random() * (l - r + 1) + r);
}
export var delay = 2000;
export const Primary_color = "#D7C0AE";//brown
export const final_color = "rgb(15,245,70)";//green
export const positional_final_color = "rgb(183,51,245)";//pink
export const compare_color = "blue";//blue
export const swap_color = "red";//red
export const min_color = "rgb(255, 192, 0)";//yellow

export function disableAllButtons(val) {
	document.getElementById('rangeSlider').disabled = val;
	var btns = document.querySelectorAll(".btn")
	for (var i = 0; i < btns.length; i++) {
		btns[i].disabled = val;
	}
}

export const changeDelay = (val) => {
  delay = val;
};
