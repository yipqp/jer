import ConfettiGenerator from "confetti-js";
import tweek from "./58716ffe7b7f6103e35c6ca6.png";
import "./style.css";

const tweekIMG = document.querySelector("#tweek");
tweekIMG.src = tweek;

var confettiSettings = {
  target: "confetti-container",
  max: "80",
  size: "1",
  animate: true,
  props: ["circle", "square", "triangle", "line"],
  colors: [
    [165, 104, 246],
    [230, 61, 135],
    [0, 199, 228],
    [253, 214, 126],
  ],
  clock: "50",
  rotate: true,
  width: "1920",
  height: "950",
  start_from_edge: false,
  respawn: true,
};

var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
