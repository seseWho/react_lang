import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  // initialize the state with current Date
  }

  // it's executed after output component has been renderized in the DOM
  componentDidMount() {
    // ID temporizer is saved
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {    
    clearInterval(this.timerID);
  }

  tick() {
    // it's used to update locally the state
    this.setState({
      date: new Date()
    });
  }

  // state must not be update directly
  // Incorrecto
  // this.state.comment = 'Hello';
  // Correcto
  // this.setState({comment: 'Hello'});

  // update state can be asynchronous
  // Incorrecto
  /*
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
  */
 // Correcto
 /*
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
  */
 // Correcto
 /*
  this.setState(function(state, props) {
    return {
      counter: state.counter + props.increment
    };
  });
  */

  // React invoke the render method of Clock component
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//React invoke ctor of component Clock independly
function App() {
  return (
    <div>
      <Clock /> 
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(  
  <App />, 
  document.getElementById('root')
);