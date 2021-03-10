import firebase from './firebase.js';
import { useState, useEffect } from 'react';

const dbRefCart = firebase.database().ref('cart');


const SetCart = () => {

    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {

        const totalCartArray = [];

        dbRefCart.on('value', (data) => {

            const cartList = data.val(); //database object with all our nested To Dos
            console.log(cartList);
            
            for (let nestedCartObject in cartList) {

                totalCartArray.push(cartList[nestedCartObject])
                }
                // console.log(totalCartArray);
                
                setCartItems(totalCartArray);
        })


    })

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
                //   onClick={(e) => handleClick(item)}
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

// export default SetCart;