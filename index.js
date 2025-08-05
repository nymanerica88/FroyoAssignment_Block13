// const flavors = ["strawberry", "wildberry", "lemon", "orange", "blueberry"];

function orderFroyo(flavors) {
  const orderedFlavors = {};
  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    // console.log(flavors[i]);
    if (flavor in orderedFlavors) {
      orderedFlavors[flavor] += 1;
    } else {
      orderedFlavors[flavor] = 1;
    }
    // console.log(orderedFlavors);
  }
  // console.log(orderedFlavors);
  return orderedFlavors;
}

let order = prompt("Please list froyo order flavors separated by a comma:");
// order.split(",").map((flavor) => flavor.trim());
const items = order.split(",").map((flavor) => flavor.toLowerCase().trim());
console.log(typeof order);

let result = orderFroyo(items);
console.log(result);

/*
// const flavors = ["strawberry", "wildberry", "lemon", "orange", "blueberry"];

function orderFroyo(flavors) {
  const orderedFlavors = {};
  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    // console.log(flavors[i]);
    if (!orderedFlavors[flavor]) {
      orderedFlavors[flavor] = 0;
    } 
    orderedFlavors[flavor] += 1
    // console.log(orderedFlavors);
  }
  // console.log(orderedFlavors);
  return orderedFlavors;
}

let order = prompt("Please list froyo order flavors separated by a comma:");
// order.split(",").map((flavor) => flavor.trim());
const items = order.split(",").map((flavor) => flavor.toLowerCase().trim());
console.log(typeof order);

let result = orderFroyo(items);
console.log(result);
*/
// function countFrequencies(arr) {
//   const frequencies = {};
//   for (const element of arr) {
//     frequencies[element] = (frequencies[element] || 0) + 1;
//   }
//   return frequencies;
// }

// // Example of obtaining input from a prompt (in a browser environment)
// const inputString = prompt(
//   "Enter array elements separated by commas (e.g., 1,2,3,1,4):"
// );
// if (inputString) {
//   const inputArray = inputString.split(",").map((item) => item.trim()); // Split by comma and trim whitespace
//   const result = countFrequencies(inputArray);
//   console.log(result);
// } else {
//   console.log("No input provided.");
// }
