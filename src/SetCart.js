import firebase from './firebase.js';
import { useState, useEffect } from 'react';

const dbRefCart = firebase.database().ref('cart');
// dbRefCart.set([]);


const SetCart = (props) => {

    const {selectedItem} = props;
    // console.log(selectedItem);
    
    const [cartItems, setCartItems] = useState([]);
    const [updatedCartItems, setUpdatedCartItems] = useState([]);
    
    useEffect(() => {

        const totalCartArray = [];
        const uniqueID = [];

        dbRefCart.on('value', (data) => {

            const cartList = data.val(); //database object with all our nested To Dos
            // console.log(cartList);
            
            for (let nestedCartObject in cartList) {

                // let cartItem = {...cartList[nestedCartObject], quantity: 1}

                totalCartArray.push(cartList[nestedCartObject])

                }
                // console.log(totalCartArray);
                // filterSelection(selectedItem);
        })

        setCartItems(totalCartArray);
        setUpdatedCartItems(selectedItem);
    }, [])


    const handleClick = (event) => {

        // copySelectedItem(item);
        
        event.currentTarget.remove();
        console.log(event);
        
        // copySelectedItem(item);

        }
    
    

    return(
        <section>
            {
            cartItems.length === 0 ?
            <h2>No Items found! Check back later</h2>
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
                    // key=`"cart-" + {item.name}`
                  onClick={handleClick}
                    >
                        <h2>{item.name}</h2>
                        <p>Price: {item.price}</p>
                        <p>Description: {item.description}</p>
                        <img src={item.image} alt={`${item.description}`}/>
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