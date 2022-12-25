// getting the canvas element
const c = document.getElementById("matrix");

// defining the canvas context
const ctx = c.getContext("2d");

// making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// letters used on Matrix rain
// more on: https://bit.ly/3yFJoU3
const letters = ["Ha", "Haha", "HaHa", "Haha!", "Ha!"];

const fontSize = 18;

// defining how many columns to print based on canvas width and font size
const columns = c.width / fontSize;

// creating an array of drops to each column
let drops = [];

// starting every drop at a y=1 position
for (let x = 0; x < columns; x++) drops[x] = 1;

//drawing the characters
function draw() {
  ctx.fillStyle = "rgba(197, 197, 197, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.font = `${fontSize}px arial`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];

    if (i % 2 == 0) ctx.fillStyle = "#ab5dee";
    else ctx.fillStyle = "#1da11f";

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > c.height && Math.random() > 0.975) drops[i] = 0;

    drops[i]++;
  }

  window.requestAnimationFrame(draw);
}

draw();
