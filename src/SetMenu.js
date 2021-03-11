//import firebase into our component
import firebase from './firebase.js';
// import ShowMenu from './ShowMenu';
import { useState, useEffect } from 'react';
// import burger1 from './assets/IMG_4043.jpg';

const dbRefApp = firebase.database().ref('/menu/appetizers');
const dbRefMains = firebase.database().ref('/menu/mains');
const dbRefSides = firebase.database().ref('/menu/sides');
const dbRefDrinks = firebase.database().ref('/menu/drinks');
const dbRefCart = firebase.database().ref('cart');


const SetMenu = (props) => {

    // console.log(props);
    const {copySelectedItem} = props;
    
    const [menuItems, setMenuItems] = useState([]);
    const [dataLoad, setDataLoad] = useState([]);
    
    useEffect(() => {

        const totalArray = [];
        dbRefMains.on('value', (data) => {

            //database object with all the nested mains
            const listOfMenu = data.val(); 

            for (let nestedMenuObject in listOfMenu) {

                const item = listOfMenu[nestedMenuObject];
                const key = nestedMenuObject;
                totalArray.push({...listOfMenu[nestedMenuObject], key: key});
            }

        })

        dbRefApp.on('value', (data) => {

            //database object with all the nested appetizers
            const listOfMenu = data.val();
            
            for (let nestedMenuObject in listOfMenu) {

                const item = listOfMenu[nestedMenuObject];
                const key = nestedMenuObject;
                totalArray.push({...listOfMenu[nestedMenuObject], key: key});
            }

        })

        dbRefSides.on('value', (data) => {

            //database object with all the nested sides
            const listOfMenu = data.val();

            for (let nestedMenuObject in listOfMenu) {

                const item = listOfMenu[nestedMenuObject];
                const key = nestedMenuObject;
                totalArray.push({...listOfMenu[nestedMenuObject], key: key});
            }            

        })

        dbRefDrinks.on('value', (data) => {

            //database object with all the nested drinks
            const listOfMenu = data.val();

            for (let nestedMenuObject in listOfMenu) {

                //gets the nested item and then sets key as the name of the parent node
                const item = listOfMenu[nestedMenuObject];
                const key = nestedMenuObject;
                //pushed the item and key to total Array as an object element in order to set a unique key for each item
                totalArray.push({...listOfMenu[nestedMenuObject], key: key});
                }

        })
        //sets the menu items from the total array which is a result from the for in loop
        setMenuItems(totalArray);        
        
    }, [])

    const handleClick = (item) => {
        //when the user click on an item it will be pushed into the cart database
        dbRefCart.push(item);

        //this function will trigger the SetCart to refresh as there has been a change to the database
        copySelectedItem(item);
        }
        
        function refresh() {
            //used to refresh the items as when they first load no html is shown and I am assuming this is because the html is run before the data storing
            setDataLoad([]);
        }
        
        
    return (
        <section>
        { 
            menuItems.length === 0 ?
            <>
            <h2>No Items found!</h2>
            <button onClick={refresh}>Click here to reload Items</button>
            </>
            :
            <div 
            className="menuItems" 
            key="main" 
            > 
            { 
                menuItems.map((item) => {
                    return (
                        <div 
                        className="item-container" 
                        key={item.name}
                        onClick={() => handleClick(item)}
                        >
                        <img src={item.image} alt={`${item.description}`}/>
                        <div className="text-container">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Price: {item.price} $</p>
                        </div>
                    </div>
                    )
                })
                }
            </div>
        }
        </section>
)
}

export default SetMenu;