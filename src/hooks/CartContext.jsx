import { useContext } from 'react';
import { CartContext } from './ContextProvider.jsx';

export const useCart = () => {
    return useContext(CartContext);
}
