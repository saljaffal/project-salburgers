import firebase from './firebase.js';
import { useState, useEffect } from 'react';

const dbRefCart = firebase.database().ref('cart');


const SetCart = (props) => {

    const {selectedItem} = props;
    
    // console.log(selectedItem);
    
    const [cartItems, setCartItems] = useState([]);
    const [dataLoad, setDataLoad] = useState([]);
    
    useEffect(() => {

        const totalCartArray = [];

        dbRefCart.on('value', (data) => {

            const cartList = data.val(); //database object with all our nested To Dos
            
            for (let nestedCartObject in cartList) {

                const item = cartList[nestedCartObject];
                const key = nestedCartObject;

                //checks if it is the empty data that I set as to keep the cart ref if the cart is empty, as if this is deleted then the whole cart ref is deleted
                if (item.name === 'empty')
                {}
                //if it is not the empty cart ref then push to total cart array
                else {
                    totalCartArray.push({...cartList[nestedCartObject], key: key});
                }
            }
        })

        setCartItems(totalCartArray);
    }, [])
    


    const handleClick = (item) => {
        
        //compares the selected key to the key in the database and deletes it from there
       
        let dbRefCartUpdate = firebase.database().ref(`cart/${item.key}`);

        dbRefCartUpdate.remove();

        //this is used to refresh the data and render again
        setDataLoad([]);
        }

    function refresh() {
        //used to refresh the items as when they first load no html is shown and I am assuming this is because the html is run before the data storing
        setDataLoad([]);
    }
    
    return(
        <section>
            {
            cartItems.length === 0 ?
            <>
            <h2>No Items found! Please add Items to the cart</h2>
            <button onClick={refresh}>Click here to reload Items</button>
            </>
            :
            <div 
            className="cartItems" 
            key="cart" 
            > 
            { 
                cartItems.map((item) => {
                    return (
                    <div 
                    className="cart-container" 
                    key={item.key}
                    onClick={(e) => handleClick(item)}
                    >
                        <img src={item.image} alt={`${item.description}`}/>
                        <h2>{item.name}</h2>
                        <p>Price: {item.price}</p>
                    </div>
                    )
                    })
                }
                </div>
            }
        </section>
    )
}

export default SetCart;