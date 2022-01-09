import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

/*
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
*/

const user = {
  firstName: 'Sese',
  lastName: 'Who'
};

const title = <h1>React JSX sample</h1>
//const title = response.potentiallyMaliciousInput;
// Esto es seguro:

function tick() {
  const element = (
    <div>  
      {title}
      <h2>Hello {formatName(user)} !</h2>
      <h2>Good to see you here.</h2>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>;
    </div>
  );
  ReactDOM.render(element,document.getElementById('root'));
};

// identicos
/*
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
*/

//

setInterval(tick, 1000);