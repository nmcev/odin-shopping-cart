import { useEffect, useState } from "react";
import data from '../assets/data/data.json';
import PropTypes from 'prop-types'
import { createContext } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const data30 = data.under30; 
    const data50 = data.under50;
    const data100 = data.under100;

    const initialShoppedItems = JSON.parse(localStorage.getItem('shoppedItems')) || [];
    const [shoppedItems, setShoppedItems] = useState(initialShoppedItems);
  
    useEffect(() => {
        localStorage.setItem('shoppedItems', JSON.stringify(shoppedItems));
    }, [shoppedItems]);
    

    const [numberOfItems, setNumberOfItems] = useState(1);
    const [quantity, setQuantity] = useState(
        parseInt(localStorage.getItem('quantity'), 10) || 0
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        localStorage.setItem('quantity', quantity.toString());
    }, [quantity]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }
, []);
    
    const handleIncrease = () => {
        setNumberOfItems(numberOfItems + 1);
    }

    const handleDecrease = () => {
        if (numberOfItems > 1)
        setNumberOfItems(numberOfItems - 1);
    }

    const handleAddToCart = (data, id) => {
        const item = data[id];
        const { name } = item;
        
        const existingItemIndex = shoppedItems.findIndex((cartItem) => cartItem.name === name);

        if (existingItemIndex !== -1) {
            const updatedItems = [...shoppedItems];
            updatedItems[existingItemIndex].quantity += numberOfItems;
            setShoppedItems(updatedItems);
            setQuantity(quantity + numberOfItems);
        } else {
            const updatedItems = [...shoppedItems, { ...item, quantity: numberOfItems }];
            setShoppedItems(updatedItems);
            setQuantity(quantity + numberOfItems);
        }
        resetNumberOfItems();
    }

    const handleRemoveItem = (item) => {
        const existingItemIndex = shoppedItems.findIndex((cartItem) => cartItem.name === item.name);
        const updatedItems = [...shoppedItems];
        updatedItems.splice(existingItemIndex, 1);
        setShoppedItems(updatedItems);
        setQuantity(quantity - item.quantity);
    }

    const handleEmptyCart = () => {
        setShoppedItems([]);
    }

    const resetNumberOfItems = () => {
        setNumberOfItems(1);
    }

    
    function increaseQuantity(item) {
        const existingItemIndex = shoppedItems.findIndex((cartItem) => cartItem.name === item.name);
        const updatedItems = [...shoppedItems];
        updatedItems[existingItemIndex].quantity += 1;
        setShoppedItems(updatedItems);
        setQuantity(quantity + 1);

    }

    function decreaseQuantity(item) {
        const existingItemIndex = shoppedItems.findIndex((cartItem) => cartItem.name === item.name);
        const updatedItems = [...shoppedItems];
        if (updatedItems[existingItemIndex].quantity > 1) {
            updatedItems[existingItemIndex].quantity -= 1;
            setShoppedItems(updatedItems);
            setQuantity(quantity - 1);
        }
        
    }


    const contextValues = {
        shoppedItems,
        numberOfItems,
        handleIncrease,
        handleDecrease,
        handleAddToCart,
        data30,
        quantity,
        handleRemoveItem,
        handleEmptyCart,
        resetNumberOfItems,
        loading,
        increaseQuantity,
        decreaseQuantity,
        data50,
        data100,
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {  
    children: PropTypes.node.isRequired,
}
