import './App.css';
//import firebase into our component
import firebase from './firebase.js';
import SetMenu from './SetMenu.js';
import SetCart from './SetCart.js'
// import ShowMenu from './ShowMenu';
//import the useState Hook from the React library
import { useState, useEffect } from 'react';

const dbRefCart = firebase.database().ref('cart');


function App() {

  

  const addToCart = (item) => {

    const selection = item;        

    selection.quantity = 1;
    let newItem = dbRefCart.push(selection);
    let newID = newItem.key;

    
  }

  return (
    <div className="App">
      
      <header>
        <h1>Salburgers</h1>
      </header>
        < SetMenu addToCart={addToCart}/>
        < SetCart />
    </div>
  );
}

export default App;
