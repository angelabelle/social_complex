console.log('social anxiety');

var colorArray = [
  // '#a70020', '#705b00', '#FFFFFF','#00576b'
    '#932c00', '#69f4ca', '#FFFFFF','#00576b'
];
var i = 0;
let filenames = [
  "9gag.png",
  "car1.png",
  "Instagram_icon.png",
  "kanye1.png",
  "meme1.png",
  "meme2.png",
  "meme3.png",
  "money.png",
  "moneybag.png",
  "fallingmoney.png",
  "bills.png",
  "hundreds.png",
  "protest1.png",
  "refugee1.png",
  "refugee2.png",
  "Twitter_icon.png",
  "YouTube_icon.png",
  "trump1bw.png",
  "grad1.png",
  "bigbrother1.png",
  "camer1.png",
  "cemetery1.png",
  "cemetery2.png",
  "comp1.png",
  "frack.png",
  "grad1.png",
  "grey1.png",
  "grey2.png",
  "grey3.png",
  "gun1.png",
  "gun2.png",
  "korea1.png",
  "mark1.png",
  "plane1.png",
  "protest2.png",
  "protest3.png",
  "putin1.png",
  "surveillance1.png",
  "tide1.png",
  "trump2.png",
  "tv1.png",
  "white1.png",
  "white2.png",
  "white1.png",
  "white2.png",
  "triangles1.png",
  "triangles2.png",
  "line1.png",
  "line2.png",
  "line3.png",
  "line1.png",
  "line2.png",
  "line3.png",
  "frank.png",
  "murakami.png",
  "cuphead.png",
  "grey4.png",
  "grey5.png",
  "text1.png",
  "text2.png",
  "text3.png",
  "text4.png",
  "text5.png"


];



// function preload() {
//   img = loadImage(society);
// }

function setup() {
  frameRate(1);
  createCanvas(displayWidth, displayHeight);
  background(255);
  console.log('is it working?');

}


function draw() {
  let r = Math.floor(Math.random() * filenames.length);
  let society = 'images/edited/' + filenames[r];
  img = loadImage(society);

}

function mouseClicked() {

  let x = random(1, 6);
  imageMode(CENTER);
    tint(colorArray[i]);



  //   i = i + 1;
  // if (i > colorArray.length -1 ) {
  //   i = 0;
  // }


  image(img, mouseX, mouseY, img.width / x, img.height / x);
  console.log('oooo');
}

function keyPressed() {
  if (keyCode === 16) {
    i = i + 1;
  if (i > colorArray.length -1 ) {
    i = 0;
  }
}
  if (keyCode === 8) {
    clear();
    console.log('deleted');

}

}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
