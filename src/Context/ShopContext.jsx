import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());


    //add to cart//
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)
    }

    //remove from cart//
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    //total product amount in cart//
    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = all_product.find((product) => product.id === Number(item))
    //             totalAmount += itemInfo.new_price * cartItems[item];
    //         }
    //         return totalAmount;
    //     }
    // }


    //displaying total items in cart//
    const getTotalCartItems = () => {
        let totalCartItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCartItem += cartItems[item];
            }
        }
        return totalCartItem;
    }
    //context//
    const ContextValue = { getTotalCartItems, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;