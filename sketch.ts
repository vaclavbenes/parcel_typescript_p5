import p5 from "p5";

// https://github.com/processing/p5.js/wiki/Global-and-instance-mode
const s = (sketch) => {
  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(400, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    // sketch.rect(x, y, 50, 50);
  };
};

let myp5 = new p5(s);
