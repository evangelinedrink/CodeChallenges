import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//https://www.taniarascia.com/getting-started-with-react/ 
class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Hello React!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))



