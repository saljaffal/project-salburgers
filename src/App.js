import './App.css';
//import firebase into our component
import firebase from './firebase.js';
import SetMenu from './SetMenu.js';
import SetCart from './SetCart.js'
// import ShowMenu from './ShowMenu';
//import the useState Hook from the React library
import { useState, useEffect } from 'react';



// const dbRefCart = firebase.database().ref('cart');


function App() {

  const [selectedItem, setSelectedItem] = useState([]);

  
  const copySelectedItem = (item) => {

    setSelectedItem(item);
    
  }

  return (
    <div className="App">
      
      <header>
        <h1>Salburgers</h1>
      </header>
        < SetMenu copySelectedItem={copySelectedItem}/>
        < SetCart selectedItem={selectedItem}/>
    </div>
  );
}

export default App;
