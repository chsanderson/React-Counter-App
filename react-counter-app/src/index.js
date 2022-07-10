import React from 'react';//, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Text, View} from 'react-native';
import {Header} from './Header';
import {heading} from './Typography';

const WelcomeScreen = ()  => (
  <View>
    <Header title="Welcome to React Native"/>
    <Text style={heading}>Step One</Text>
    <Text>
      Edit App.js
    </Text>
  </View>
);




//import App from './App';
//import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

/**
 * Creating Counter App Using Hooks
 */
/*function Counter()
{
  const [counter, setCounter] = useState(0);
  function increment()
  {
    setCounter(counter+1);
  }
  return <div>
    <p>{counter}</p>
    <button onClick={increment}>
      Increment
    </button>
  </div>;
}
const el = <Counter/>;
ReactDOM.render(el, document.getElementById('root'));


/**
 * Using State
 */
/*class Counter extends React.Component {
  //Initialising the counter to the value 0 in the state
  state = {
    counter : 0
  }
  increment = () => {
    this.setState({counter : this.state.counter+1});
  }
  // componentDidMount Method called when the component has been rendered on the page
  componentDidMount()
  {
    this.setState({counter: 42});
  }
  render()
  {
    return <div>
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
    </div>;
  }

}
const el = <Counter />;
ReactDOM.render(el,document.getElementById('root'));

/**
 * Basic Version
 */
/*let counter = 0;
function show() {
  counter++;
  const el = <p>{counter}</p>
  ReactDOM.render(el,document.getElementById('root'));
}

setInterval(show,1000);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
