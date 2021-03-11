import './App.css';
//import firebase into our component
import firebase from './firebase.js';
import SetMenu from './SetMenu.js';
import SetCart from './SetCart.js'
import { useState } from 'react';

function App() {

  const [selectedItem, setSelectedItem] = useState([]);

  const copySelectedItem = (item) => {

    setSelectedItem(item);
    
  }

  return (
    <div className="wrapper">
      
      <header>
        <h1>Salburgers</h1>
      </header>
      <h2 className="title">Menu</h2>
        < SetMenu copySelectedItem={copySelectedItem}/>
        <h2 className="title">Cart</h2>
        < SetCart selectedItem={selectedItem}/>
    </div>
  );
}

// I was able to add and remove items from the firebase based on what the user clicks but unfortunately I couldn't get the html to refresh, and I didn't know how to fix that as the cart items kept on adding to the previous items

export default App;
