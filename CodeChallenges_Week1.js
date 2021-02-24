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
  