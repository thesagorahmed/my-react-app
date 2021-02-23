import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  // let person = {
  //   name: "Dr. Mahfuz",
  //   job: "Singer"
  // }
  // let style ={
  //   color:'red',
  // }
  const nayoks = ['Anowar', 'Alomgir', 'Salman', 'Shakib Khan', 'Bappi']
  const products = [
    {name:'Photoshop', price: '$89.99', des:'loremdggkjdhgjdhkjdhgkjhgkjhgghfdkjghdfkgjhfd'},
    {name:'Illustrate', price: '$59.99'},
    {name:'PDF', price: '$9.99'},
    {name:'Premier Pro', price: '$249.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Web Application
        </a>
        <p style={style}>Famous Person: {person.name + " "+ person.job}</p> */}
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.price}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li> */}
        </ul>
        {
          products.map (productAdd => <Products product = {productAdd}></Products>)
        }
        <Person name={nayoks[0]} job="Actor"></Person>
        <User></User>
        <Counter></Counter>
        <Person name="Sagor Ahmed" job="Programmer"></Person>
        <Person name="Abdur Rahman" job="Hafez"></Person>
        <Sports name="Rubel Hossian" job="Actor"></Sports>
        {/* <Products product ={products[0]}></Products>
        <Products product ={products[1]}></Products>
        <Products product ={products[2]}></Products> */}
        
      </header>
    </div>
  );
}

function Person (props){
  return (
  <div style={{border:'1px solid red', backgroundColor: 'green'}}>
    <h1>this is {props.name}</h1>
    <h2>this {props.job}</h2>
  </div>
  )
}

function Sports (props){
  const sportscss = {
    marginTop: '50px',
    backgroundColor: 'gray',
    marginBottom: '100px'
  }
  return (
    <div style={sportscss}>
      <p>This is {props.name}</p>
      <h1>I am the Boss</h1>
    </div>
  )
}

function Products (props){
  const productstyle = {
    backgroundColor: 'gray',
    borderRadius: '5px',
    padding: '50px'
  }
  return(
    <div style={productstyle}>
      <h5>{props.product.name}</h5>
      <h4>{props.product.price}</h4>
      <p>{props.product.des}</p>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [counts, setcounts] = useState(59);
  const handlerIncrease = () => {
    const newCount = counts + 1;
    setcounts(newCount);
  };
  return(
    <div>
      <h1>Count: {counts}</h1>
      <button onClick= {handlerIncrease} >Increase</button>
      <button onClick= {() => setcounts(counts - 1)} >Decrease</button>
    </div>
  )
}

function User(){
  const [user, setUser] = useState([]);
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setUser(data))
    
  }, []);
  return(
    <ul>
      {
        user.map(users => <li>{users.title}</li>) 
      }
    </ul>
      
    
  )
}
export default App;
