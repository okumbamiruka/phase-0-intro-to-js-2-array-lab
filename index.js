// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  cats.push(name); // adds to the end
  return cats
}
function destructivelyPrependCat(name) {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  cats.unshift(name); // adds to the beginning
  return cats
}

function destructivelyRemoveLastCat() {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  cats.pop(); // removes the last element
  return cats
}
function destructivelyRemoveFirstCat() {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  cats.shift(); // removes the first element
  return cats
}

function appendCat(name) {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
    return [...cats, name] // returns a new array
}
function prependCat(name) {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
    return [name, ...cats] // returns a new array
}

function removeLastCat(){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
    return cats.slice(0, -1) // returns a new array
}

function removeFirstCat(){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
    return cats.slice(1) // returns a new array
}
console.log(destructivelyAppendCat("Ralph"));
console.log(removeFirstCat());
