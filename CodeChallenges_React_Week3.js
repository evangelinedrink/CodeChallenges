//Code Challenge: React Components and Object Destructuring
// This array is used for the Example.
const GAMES = [
    { id: 0, name: "Chess" },
    { id: 1, name: "Go" },
    { id: 2, name: "Risk" },
    { id: 3, name: "Cribbage"}, 
    { id: 4, name: "Spit" }
  ];
  
  // This array is used for the Challenge.
  const RESOURCES = [
    { 
      id: 0, 
      title: "WesBos.com - Destructuring Objects",
      url: "https://wesbos.com/destructuring-objects/"
    },
    { 
      id: 1, 
      title: "FreeCodeCamp - The Basics of Destructuring Props in React",
      url: "https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477" 
    },  
    { 
      id: 2, 
      title: "MDN - Destructuring assignment",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    },
    {
      id: 3,
      title: "W3Schools - a target",
      url: "https://www.w3schools.com/tags/att_a_target.asp"
    }
  ];
  
  class Resources extends React.Component {
    constructor(props) {
      super(props);
      
      this.state= {
        resources: RESOURCES
      };
    }
    
    render() {
      const resourcesList= this.state.resources.map(resource=> {
        return(
        <li key={resource.id}> {/*Good practice to always have a key and resource.id for each value in an object or an array.*/}
        <RenderResource resource={resource}/> {/*Each value in the RESOURCES object (it is located in the {resource}) is assigned to a variable resource that will pass through the RenderResource function below.*/}
        </li>
            );
      });
      
      return(
      <div>
          <h2>Additional Resources</h2>
          <ul>{resourcesList}</ul> {/*Displays the function where we have all our lists and clickable links setup.  ResourcesList starts on line 44.*/}
      </div>
          );
    }
  }
    
   function RenderResource({resource}) {
              return(
                  <li><a href={resource.url} target="_blank">{resource.title}</a></li>   {/*This code tells the computer the different Resource titles and makes them clickable to access a new link that will take the user to a new tab (target="_blank") */}
              );
            }
    
  function App() { 
    return ( 
      <div> 
        <PageTitle /> 
        <Games /> 
        <hr /> 
        <Challenge /> 
        <Resources /> {/*Render the Resources component in the App component*/} 
      </div> 
    ); 
  }
          
  function PageTitle() {
    return (
      <h1>Code Challenge: React Components and Object Destructuring</h1>
    );
  }
  
  class Games extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        games: GAMES
      };
    }
    
    render() {
      const gamesList = this.state.games.map(game => {
        return (
          <li key={game.id}>
            <RenderGame game={game} />
          </li>
        );
      });    
      
      return (
        <div>
          <h2>Available Games</h2>
          <ul>{gamesList}</ul>
        </div>
      );
    }
  }
  
  function RenderGame(props) {
    return (
      <strong>Game ID {props.game.id}: {props.game.name}</strong>
    );
  }
  
  function Challenge() {
    return (
      <React.Fragment>
        <p>For your Code Challenge, you will use the RESOURCES array (line 11).</p>
        <ul>
          <li><strong>Challenge 1:</strong> Create a class component named <strong>Resources</strong>. Model this component on the Games component. Cause it to be displayed in the Results display (the large white panel) by rendering it inside the <strong>App component</strong>, beneath where the Challenge component is rendered.</li>
          <li><strong>Challenge 2:</strong> Create a functional component named <strong>RenderResource</strong>. Use object destructuring in its parameter list to pass in <strong>props.resource</strong> as simply <strong>resource</strong>.</li>
          <li><strong>Challenge 3:</strong> List the URL titles to the view in the render() function of Resources, similar to how the games are listed in the render() function of Games, using the destructured <strong>resource</strong> argument. Title the list <strong>"Additional Resources".</strong></li>
        <li><strong>Challenge 4</strong>: Use JSX elements to make each URL into clickable links. Have them open in a new tab, not the current one. Two hints: 1) You will NOT need to use React Router for this challenge. 2) Look up the "anchor target attribute".</li>
        </ul>
      </React.Fragment>
    );
  }
  
  ReactDOM.render( <App />, document.getElementById("root"));

//Code Challenge: React Components and Objects
//Same challenge as above, however this code doesn't have Object Destructuring
// This array is used for the Example.
const GAMES = [
    { id: 0, name: "Chess" },
    { id: 1, name: "Go" },
    { id: 2, name: "Risk" },
    { id: 3, name: "Cribbage"}, 
    { id: 4, name: "Spit" }
  ];
  
  // This array is used for the Challenge.
  const RESOURCES = [
    { 
      id: 0, 
      title: "WesBos.com - Destructuring Objects",
      url: "https://wesbos.com/destructuring-objects/"
    },
    { 
      id: 1, 
      title: "FreeCodeCamp - The Basics of Destructuring Props in React",
      url: "https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477" 
    },  
    { 
      id: 2, 
      title: "MDN - Destructuring assignment",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    },
    {
      id: 3,
      title: "W3Schools - a target",
      url: "https://www.w3schools.com/tags/att_a_target.asp"
    }
  ];
  
  class Resources extends React.Component {
    constructor(props) {
      super(props);
      
      this.state= {
        resources: RESOURCES
      };
    }
    
    render() {
      const resourcesList= this.state.resources.map(resource=> {
        return (
          <RenderResources resourceVar={resource}/> /*Passing a props from the Parent component to the Child component (RenderResources).  The prop's variable name is resourceVar and {resource} is the object, located inside of the parenthesis from the this.state.resourcess.map().  The {resource} object is the objects from the resources object (this object was created from the Resources array in line 39.*/
                );
      });
            
            return (
            <div>
              <h2>Additional Resources</h2>
              <ul>{resourcesList}</ul>
            </div>
              );
  }
  }
  
  function RenderResources(props) { //Child component to Resources Component. This is a Presentational Component
    return(
      <ul>
        <li><a href={props.resourceVar.url} target="_blank">{props.resourceVar.title}</a></li> {/*The a element makes the title clickable with a link atttached to it. Target="_blank" opens a new tab when the title is clicked.*/}
      </ul>
    );          
   }
  
  
  function App() { 
    return( 
      <div> 
        <PageTitle /> 
        <Games /> 
        <hr /> 
        <Challenge /> 
        <Resources /> {/*Render the Resources component in the App component*/}
      </div> 
    ); 
  }
          
  function PageTitle() {
    return (
      <h1>Code Challenge: React Components and Object Destructuring</h1>
    );
  }
  
  class Games extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        games: GAMES //games is the variable name to the GAMES array in lines 2-8
      };
    }
    
    render() {
      const gamesList = this.state.games.map(game => {
        return (
          <li key={game.id}>
            <RenderGame game={game} /> {/*Passing a props from the Parent component to the Child component (RenderGame).  The prop's variable name is game and the {game} is the object, located inside of the parenthesis from the this.state.games.map().  The {game} object is the objects from the games object variable that was created in line 90 (below the this.state statement).*/}
          </li>
        );
      });    
      
      return (
        <div>
          <h2>Available Games</h2>
          <ul>{gamesList}</ul>
        </div>
      );
    }
  }
  
  function RenderGame(props) { //Presentational Component for Games Component. RenderGame component is the child component for the Games Component
    return (
      <strong>Game ID {props.game.id}: {props.game.name}</strong>
    );
  }
  
  function Challenge() {
    return (
      <React.Fragment>
        <p>For your Code Challenge, you will use the RESOURCES array (line 11).</p>
        <ul>
          <li><strong>Challenge 1:</strong> Create a class component named <strong>Resources</strong>. Model this component on the Games component. Cause it to be displayed in the Results display (the large white panel) by rendering it inside the <strong>App component</strong>, beneath where the Challenge component is rendered.</li>
          <li><strong>Challenge 2:</strong> Create a functional component named <strong>RenderResource</strong>. Use object destructuring in its parameter list to pass in <strong>props.resource</strong> as simply <strong>resource</strong>.</li>
          <li><strong>Challenge 3:</strong> List the URL titles to the view in the render() function of Resources, similar to how the games are listed in the render() function of Games, using the destructured <strong>resource</strong> argument. Title the list <strong>"Additional Resources".</strong></li>
        <li><strong>Challenge 4</strong>: Use JSX elements to make each URL into clickable links. Have them open in a new tab, not the current one. Two hints: 1) You will NOT need to use React Router for this challenge. 2) Look up the "anchor target attribute".</li>
        </ul>
      </React.Fragment>
    );
  }
  
  ReactDOM.render( <App />, document.getElementById("root"));


  
  //React Challenge: Lifting State Up and Function Components
  class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      bootcampName: "Nucamp"
    };
  }
  
  render() {
    return (
     <div> {/*Div element is used because at least two statements will be displayed in the web page. If only one element is displayed on the web page, for example statement in line 12, then a Div element would not be needed.*/}
      <Welcome bootcamp={this.state.bootcampName}/> {/*This creates the variable "bootcamp" that can be used in the Welcome Component.  It takes the object value in this.state.bootcampName from lines 4-5.*/}
      <Welcome2 bootcamp2={this.state.bootcampName}/> {/*To be used in the Object Destructuring for the Welcome2 component.*/}
     </div>   
      );
  }  
}

function Welcome(props) {
    return ( //Function components don't use the render() method.
      <h1>Welcome to {props.bootcamp}!</h1> //When lifting a state, the computer will pass the state information to children components as props.  That is why this line has props.bootcamp. Function components don't use the "this" keyword. Welcome component is the child component of App component.
    );  
}

function Welcome2({bootcamp2}) { //Using the Object Destructuring Method in a function.
  return(
    <h2> Welcome to {bootcamp2}!</h2>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));