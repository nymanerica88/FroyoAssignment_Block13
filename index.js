// let order = prompt("Please list froyo order flavors here:");
const flavors = [
  "strawberry",
  "strawberry",
  "wildberry",
  "lemon",
  "lemon",
  "lemon",
  "lemon",
  "orange",
  "orange",
  "blueberry",
];
const orderedFlavors = {};
for (let i = 0; i < flavors.length; i++) {
  const flavor = flavors[i];
  // console.log(flavors[i]);
  if (flavor in orderedFlavors) {
    orderedFlavors[flavor] += 1;
  } else {
    orderedFlavors[flavor] = 1;
  }
  console.log(orderedFlavors);
}

// const colors = ["red", "red", "blue", "yellow", "yellow", "yellow", "blue"];

// // red : 2, blue: 1, yellow: 3

// // creating an object to fill with color count
// const frequencyCounter = {};

// for (let i = 0; i < colors.length; i++) {
//   const color = colors[i];
//   // does the key exist in my object
//   console.log(frequencyCounter);
//   if (color in frequencyCounter) {
//     // add one to the count
//     frequencyCounter[color] += 1;
//     // otherwise if it doesnt exist
//   } else {
//     // place it inside of object assign the value to 1
//     frequencyCounter[color] = 1;
//   }
// }

console.log("freq", frequencyCounter);
