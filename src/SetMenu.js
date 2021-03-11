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
// console.log(dbRefMenu);


const SetMenu = (props) => {

    // console.log(props);
    const {copySelectedItem} = props;
    
    const [mainItems, setMainItems] = useState([]);
    const [dataLoad, setDataLoad] = useState([]);
    // const [cartItem, setCartItem] = useState([]);
    // console.log( props.addToCart);
    
    // const {filterCart} = props;
    // const {incrementCart} = props2;
    

    useEffect(() => {

        const totalArray = [];

        dbRefMains.on('value', (data) => {

            const listOfMenu = data.val(); //database object with all our nested To Dos
            for (let nestedMenuObject in listOfMenu) {

                totalArray.push(listOfMenu[nestedMenuObject])
                }
                // console.log(totalArray);
                
                // setMainItems(totalArray);

        })

        dbRefApp.on('value', (data) => {

            const listOfMenu = data.val(); //database object with all our nested To Dos
            
            for (let nestedMenuObject in listOfMenu) {

                totalArray.push(listOfMenu[nestedMenuObject])
                }

                // setAppItems(appArray);

        })

        dbRefSides.on('value', (data) => {

            const listOfMenu = data.val(); //database object with all our nested To Dos

            for (let nestedMenuObject in listOfMenu) {

                totalArray.push(listOfMenu[nestedMenuObject])
                }

                // setSideItems(sideArray);
            

        })

        dbRefDrinks.on('value', (data) => {

            const listOfMenu = data.val(); //database object with all our nested To Dos
            for (let nestedMenuObject in listOfMenu) {

                totalArray.push(listOfMenu[nestedMenuObject])
                }

                // setDrinkItems(drinkArray);

        })

        setMainItems(totalArray);
        // console.log(totalArray);
        
        
    }, [])

    const handleClick = (item) => {

        // copySelectedItem(item);
        
        dbRefCart.push({...item, quantity: 1});

        copySelectedItem(item);

        }
        
        function refresh() {
            setDataLoad([]);
        }
        
        
        
        
        return (
            <section>
        { /* {   setTimeout() */
            mainItems.length === 0 ?
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
                mainItems.map((item) => {
                    return (
                        <div 
                        className="item-container" 
                        key={item.name}
                        onClick={() => handleClick(item)}
                        >
                        <img src={item.image} alt={`${item.description}`}/>
                        <h2>{item.name}</h2>
                        <p>Price: {item.price}</p>
                        <p>Description: {item.description}</p>
                        
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