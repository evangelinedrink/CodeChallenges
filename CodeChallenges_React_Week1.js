//Code Challenge: Template Literals
const cardSuit = "Spades";
const cardValue = 5;
console.log("You turn the card over. It is a " + cardValue + " of " + cardSuit + "!"); // edit this line to use template literal syntax.
//Using template literal syntax
console.log(`You turn the card over. It is a ${cardValue} of ${cardSuit}!`);


//Code Challenge: Objects
// 1 - white rabbit
const rabbit = { 
    color: "white",
    checkWatch() {
      console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
    }
  };
  rabbit.checkWatch();
  
  // 2 - spaceship
  const spaceship = { 
    name: "Astrid",
    launch() {
    alert(`You have launched the spaceship ${this.name}!`);
  }
  };
  spaceship.launch(); //Displays the launch message in the console log.
  
  // 3 - shopping cart
  const cart = {
    contents: [ ],
    addItem(item) {
      this.contents.push(item);
      //console.log("The cart contains:" cart.contents); <-- Why does this not work?
    }, //Make sure to have a common to separate the different methods
    
  removeItem(item) {
    let check= this.contents.includes(item); //includes() methode checks to see if the array contains the item inside of the parenthesis.
      if(check===true) {
        this.contents.pop(item);
        return console.log("Duplicate items have been removed.");
      } else {
        return console.log("This item is not in the cart.");
      }
    }
  };
  cart.addItem("laptop");
  console.log("The cart contains:", cart.contents);
  cart.removeItem("laptop"); //Removes duplicate items from the cart.
  console.log("The cart contains:", cart.contents); //Will show that the laptop is no longer in the cart.
  cart.removeItem("pizza"); //Check to see if the removeItem() method will work for an item that is not already in the cart.
  
  // 4 - lever
  const lever= {
    stamp: "ACME",
    pull() {
      console.log(`An anvil stamped ${this.stamp} drops on your head.`);
    }
  }
  lever.pull(); //Calls the method pull() and displays its message in the console log.
  
  // 5 - Angry Bird
  const angryBird = {
    color: "brown",
    throw(type, object) {
      console.log(`The angry ${this.color} ${type} throws a ${object} at you!`);
    }
  };
  angryBird.throw("owl", "rock");

  
  //Code Challenge: Class Inheritance
  class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Demon extends Monster {
  constructor(type, color, power) {
    super(type, color);
    this.power= power;
  }
  hunting() {
    alert(`Better run fast, the ${this.color} ${this.type} demon is coming after you! If it catches you, it will ${this.power} you against a wall and then break your neck.`);
  }
}
const demonChild= new Demon("poltergeist", "transparent","throw"); //Creating a new object using Demon class
demonChild.hunting(); //Calling the hunting() method for demonChild object.

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
  
  behavior() {
    console.log(`The ${this.color} ${this.type} curls its lips and smiles at you before unleashing ${this.element} in the air.`)
  }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

//New Werewolf object
const werewolf1= new Werewolf("werewolf", "redish-brown");
werewolf1.howl(); //Call the howl() method for werewolf1 object.

const woodDragon = new Dragon("dragon", "brown", "wood");
woodDragon.fly(); //Call the fly() method for the woodDragon object.
woodDragon.roar(); //Call the roar() method for the woodDragon object.
woodDragon.behavior(); //Call the behavior() method for the woodDragon object.


//Code Challenge: Map Array Method
// 1: Use the map method on the numbers array given at line 2 to add 5 to each number and put the results into a new array.
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive = numbers.map(n=> n+5); //Using the Map() array method to add 5 to each value in the numbers array.
// The below line should console.log: [6, 6, 7, 8, 10]
console.log(numbersAddFive); 

// 2: Use the map method on the same numbers array to turn it into an array of strings, and add a colon and a space after each number.
const numbersReformatted = numbers.map(n => n.toString() + ": "); //Making values into the numbers array into a string. Then, the ": " will be added to each value in the numberReformatted array.
//const numbersReformatted= numbers.join(": ");
 //The below line should console.log: ["1: ", "1: ", "2: ", "3: ", "5: "] 
 console.log(numbersReformatted);

// 3: Use the map method on the words array on line 13 to remove the "s" from the end of each word.
const words = ["planes", "trains", "automobiles"];
const singularWords = words.map(n=>n.slice(0,-1)); //Slice() method is used to extract parts of a string and returns the extracted sections in the new string. Inside of the slice() parenthesis (the parameters), -1 is the last part of a string (in this case s). To extract the whole string, 0 is the parameter to use with no end value, however placing the -1 means to extract everything except the last letter of the word. 
// The below line should console.log: ["plane", "train", "automobile"]
console.log(singularWords);

// 4: Use the map method on the words array from line 13 to return an array with just the first letter of each word
const firstLetters = words.map(n=> n.slice(0,1)); //Slice method with parameters (0,1) will extract only the first word in the string and return it in the new array.
// The below line should console.log: ["p", "t", "a"]
console.log(firstLetters);

// Bonus: Use the map method on the words array to return an array with just the first letter of each word capitalized (along with the rest of the word in lower case
const capitalizedWords = words.map(n=> n[0].toUpperCase() + n.slice(1)); //n[0] is the array index value for the first letter of the string. The slice() method extracts parts of a string and returns the extracted parts. The n.slice(1) will take all the letters after the first value. The plus sign adds the capitalized first letter with the rest of the word (which is lower case). 
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);