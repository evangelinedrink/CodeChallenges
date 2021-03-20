//Code Challenge: Spread Syntax
/* Challenge 1 - spread the two arrays below to create a new array 'philosophers' */
const ancientGreekPhilosophers = ["Hypatia", "Socrates", "Zeno"];
const modernPhilosophers = ["Allan Gibbard", "Susan Haack", "Judith Butler"];

const philosophers = [...ancientGreekPhilosophers, ...modernPhilosophers];
console.log(philosophers);

/* Challenge 2 - spread the array below to create a new array 'newStudents' that includes the given studentToAdd object */
const STUDENTS = [
    { name: "Rocky" },
    { name: "Celine" },
    { name: "Masood" },
];
const studentToAdd = { name: "Krystal" };

const newStudents = [...STUDENTS, studentToAdd];
console.log(newStudents);

/* Challenge 3 - spread the object below to create a new object that updates the students property with the newStudents array that you created in Challenge 2 */
const reactCourse = {
    durationInWeeks: 5,
    name: "React",
    students: STUDENTS    //Property is students, value is STUDENTS
}

const reactCourseUpdated = {...reactCourse, students: newStudents };
console.log(reactCourseUpdated);


//Code Challenge: Ternary Operator
// Refactor Challenge #1 
if (1+1===2) {
    console.log('It is true that 1+1 equals 2.');
  } else {
    console.log('It is false that 1+1 equals 2.');
  }
  // Uncomment the below line (line 8) and hit the Run button. You should then see the console log "It is true that 1+1 equals 2." line twice.
  console.log(1+1===2 ? 'It is true that 1+1 equals 2.' : 'It is false that 1+1 equals 2.');
  
  
  // Refactor Challenge #2 - you're on your own for this one buddy!
  if (0) {
    console.log('0 evaluates as true.');
  } else {
    console.log('0 evaluates as false.');
  }
  // Write your revision of the above code using the ternary operator here. Keep the above code - the expected result is that you will see "0 evaluates as false" in the console twice. 
  console.log((0)? "0 evaluates as true." : "0 evaluates as false.")
  
  
  // Refactor Challenge #3
  let hungry = true;
  if (hungry) {
    console.log('Go eat something.');
  } else {
    console.log('Keep coding!');
  }
  // Write your revision of the above code using the ternary operator here. Keep the above code - the expected result is that you will see "Go eat something!" in the console twice. 
  console.log((hungry)? "Go eat something." : "Keep coding!")
  
  // Refactor Challenge #4! The code you need to refactor is inside the function. For this one, go ahead and replace the contents of this function, rewritten using the ternary operator. You should be able to accomplish this in a single line. 
  /*const isEven = (dice) => {
    if ( dice % 2 ) {  
      return false;
    } 
    return true; 
  }*/
  const isEven= (dice) => {(dice%2)? false: true};
  
  
  // This is just code to supplement Refactor Challenge #4.
  const MAX = 6;
  let dice = Math.floor(Math.random() * MAX + 1);
  console.log(`You need to roll an odd number to win:\n
    You roll the dice... It tumbles and comes to a stop, showing ${dice} ${(dice > 1) ? 'pips' : 'pip'}! -- ${isEven(dice) ? 'Better luck next time!' : 'You win!'}`);


//Code Challenge: Regular Expressions
function validate() {
    let inputStr = document.getElementById("username").value;
   
    const myReg = /^([A-Z]|[a-z]|\d)+\d$/ //The values inside of the parenthesis and inside of the square brackets means that they are accepted as username values. [A-Z] means all capital letters from A to Z are accepted. [a-z] means all lowercase letters from a to z are accepted. \d corresponds to any digit from 0-9. The | (or) operator states that any of these values can be accepted. The +\d means that a number has to be the last value for the username.
  
    if (myReg.test(inputStr)) 
      alert("Username accepted");
    else
      alert("Username must contain only alphanumeric characters, contain a mininum of two characters, and end with a digit.");
  }

  
  //React Practice: Controlled Forms
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state({input: " "});
      this.formUpdate= this.formUpdate.bind(this); //This will update when the form's input has been changed.
    }
    
    formUpdate(event) { //Defining the formUpdate method. Every time a change happens in the form, the formUpdate method will be called with the event object. This is done thanks to the onChange react even in line 15.  formUpdate updates this.state.input thanks to setState.
      this.setState({input: event.target.value});
    }
    render() {
      return (
      <div className="form-group container">
        <label>Controlled Form Input</label>
        <input type="text" className="form-control" area-describedby="emailHelp" placeholder="Update input here" value={this.state.input} onChange={this.formUpdate}/> //The onChange react event will trigger the formUpdate method when there is a change in the form's input . onChange even calls formUpdate and passes the event object. value will be changed according to what is typed in the input form (line 17).  The value will then go into the empty string in the this.state.input from line 4.
        <large className="form-text text-muted">
        {this.state.input} /*Pass the state input value to the value of the email form, which will then be the value of the output text.*/
        </large>
       </div>
      );
    }
  }
  
  ReactDOM.render(
  <App/>,
  document.getElementById("root")
  );


  //Code Challenge: Toggling Modals
  // You have learned to use 'import' to bring in components from libraries in your React project. Using const is another way to do it that works better in Codepen. Do not be concerned about the difference at this time.
const { Modal, ModalBody, Button } = Reactstrap;

// The code you should pay attention to begins after this comment.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this); //Ensures that "this" keyword is binded to the correct method (in this case to toggleModal). With an event handler in JSX, you call the method (in this case toggleModal) without using () after the toggleModal method/function.  This is why we have to bind the "this" keyword to toggleModal function.
    
    this.state = {
      isModalOpen: false //Keeps track if the modal is open (true) or closed (false)
    };
  }
  
  toggleModal() {
    this.setState({  //When the Modal is open (clicked on by the user) isModalOpen will be changed to the opposite of false (true), meaning that the Modal is opened.
      isModalOpen: !this.state.isModalOpen
    });
  }
  
  render() {
    return(
      <React.Fragment>
        <Button color="success" onClick={this.toggleModal}>Click on me!</Button> {/*When the button is clicked, the toggleModal method will start running.*/}
        
        {/*Creating the Modal*/}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> {/*Reactstrap Modal component comes with two attributes, isOpen and toggle. isOpen attribute is false, the modal will be closed and hidden. If isOpen attribute is true
                the modal will be opened and visible. toggle attribute makes it possible to close the modal when it is opened. */}
        <ModalBody>
          Hello World! This is the first modal in this CodePen.
        </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));