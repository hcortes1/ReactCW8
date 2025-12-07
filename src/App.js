import React, {Component} from 'react';
import {HashRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import HelloWorld from './HelloWorld.jsx';
import FilteredList from './FilteredList.jsx';
import Counter from './Counter.jsx';

const produce = [
  {name: "Apple", type: "Fruit"},
  {name: "Pineapple", type: "Fruit"},
  {name: "Banana", type: "Fruit"},
  {name: "Pear", type: "Fruit"},
  {name: "Strawberry", type: "Fruit"},
  {name: "Orange", type: "Fruit"},
  {name: "Lettuce", type: "Vegetable"},
  {name: "Cucumber", type: "Vegetable"},
  {name: "Eggplant", type: "Vegetable"},
  {name: "Squash", type: "Vegetable"},
  {name: "Bell pepper", type: "Vegetable"},
  {name: "Onion", type: "Vegetable"}
];

class HomePage extends Component{
  render(){
    return(
      <div>
        <h1>React Assignment CW8</h1>
        <HelloWorld name="Hello student!" />
        <FilteredList items={produce} />
        <div style={{marginTop: '20px'}}>
          <Link to="/counter" style={{fontSize: '18px', textDecoration: 'none', color: '#007bff'}}>
            Go to Counter Page
          </Link>
        </div>
      </div>
    )
  }
}

class CounterPage extends Component{
  render(){
    return(
      <div>
        <h1>Counter Page</h1>
        <Counter />
        <div style={{marginTop: '20px'}}>
          <Link to="/" style={{fontSize: '18px', textDecoration: 'none', color: '#007bff'}}>
            Back to Home
          </Link>
        </div>
      </div>
    )
  }
}

class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<CounterPage />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;