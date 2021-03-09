import './App.css';
//import firebase into our component
import firebase from './firebase.js';
import SetMenu from './SetMenu';
// import ShowMenu from './ShowMenu';
//import the useState Hook from the React library
// import { useState, useEffect } from 'react';

function App() {


  return (
    <div className="App">
      
      <header>
        <h1>Salburgers</h1>
      </header>
        < SetMenu />
    </div>
  );
}

export default App;
