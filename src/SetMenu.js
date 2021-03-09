//import firebase into our component
import firebase from './firebase.js';
// import ShowMenu from './ShowMenu';
import { useState, useEffect } from 'react';
import burger1 from './assets'

const dbRefApp = firebase.database().ref('/menu/appetizers');
const dbRefMains = firebase.database().ref('/menu/mains');
const dbRefSides = firebase.database().ref('/menu/sides');
const dbRefDrinks = firebase.database().ref('/menu/drinks');
// console.log(dbRefMenu);


const SetMenu = () => {

    const [mainItems, setMainItems] = useState([]);
    const [appItems, setAppItems] = useState([]);
    const [drinkItems, setDrinkItems] = useState([]);
    const [sideItems, setSideItems] = useState([]);

    useEffect(() => {

        const mainArray = [];
        const appArray = [];
        const sideArray = [];
        const drinkArray = [];

        dbRefMains.on('value', (data) => {

            const listOfMenu = data.val(); //database object with all our nested To Dos
            for (let nestedMenuObject in listOfMenu) {

                mainArray.push(listOfMenu[nestedMenuObject])
                }

                setMainItems(mainArray);

        })

        dbRefApp.on('value', (data) => {

            const listOfMenu = data.val(); //database object with all our nested To Dos
            
            for (let nestedMenuObject in listOfMenu) {

                appArray.push(listOfMenu[nestedMenuObject])
                }

                setAppItems(appArray);

        })

        dbRefSides.on('value', (data) => {

            const listOfMenu = data.val(); //database object with all our nested To Dos

            for (let nestedMenuObject in listOfMenu) {

                sideArray.push(listOfMenu[nestedMenuObject])
                }

                setSideItems(sideArray);
            
            
            
            //create an array to represent To Do object

        })

        dbRefDrinks.on('value', (data) => {

            const listOfMenu = data.val(); //database object with all our nested To Dos
            for (let nestedMenuObject in listOfMenu) {

                drinkArray.push(listOfMenu[nestedMenuObject])
                }

                setDrinkItems(drinkArray);

        })
    }, [])
    return (
        <div className="menuItems">
            {
            mainItems.map((item) => {
                return (
                    
                <div>
                    {/* {console.log(item)} */}
                    <h2>{item.name}</h2>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <img src={item.image} alt={`This is ${item.name}`}/>
                </div>
                )
                })
            }
            { appItems.map((item) => {
                return(
                <div>
                    {/* {console.log(item)} */}
                    <h2>{item.name}</h2>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <img src={item.image} alt={`This is ${item.name}`}></img>
                </div>
                )
            })
            }
            { sideItems.map((item) => {
                return(
                <div>
                    {/* {console.log(item)} */}
                    <h2>{item.name}</h2>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <img src={item.image} alt={`This is ${item.name}`}></img>
                </div>
                )
            })
            }
            { drinkItems.map((item) => {
                return(
                <div>
                    {/* {console.log(item)} */}
                    <h2>{item.name}</h2>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <img src={item.image} alt={`This is ${item.name}`}></img>
                </div>
                )
            })
            }
        </div>
)
}



export default SetMenu;
    // for (let nestedMenuObject in listOfMenu) {
    
    //     toDoArray.push(listOfMenu[nestedMenuObject]);
    // }
    
    // for (let i=0; i< toDoArray.length; i++) {
    //     for (let nestedMenuObject in toDoArray[i]) {
    
    //         appArray.push(toDoArray[i][nestedMenuObject]);
    //     }
    // }
    
    // console.log(toDoArray[0]);
    
    // console.log(toDoArray[0]);
    // for (let i=0; i<appArray.length ;i++)
    // {
    //     const { 
    //         description, 
    //         image, 
    //         name, 
    //         price
    //     } = appArray[i];
    
    //     // console.log(description);
    //     // console.log(image);
    //     // console.log(name);
    //     // console.log(price);
    // }