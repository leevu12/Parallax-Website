let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountainsBehind = document.querySelector("#mountains__behind");
let mountainsFront = document.querySelector("#mountains__front");
let text = document.querySelector("#title");
let button = document.querySelector("#button");
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value  + "px";
  mountainsBehind.style.top = value * 0.3 + "px";
  text.style.marginLeft = value * 2 + "px";
  text.style.marginTop = value * 0.5 + "px";
  button.style.marginTop = value * 0.6 + "px";
});
