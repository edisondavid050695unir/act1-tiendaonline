import React from 'react';
import './CartItem.css'; // Asegúrate de tener este archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ itemCount, totalPrice }) => {
  return (
    <div className="cart-item">
      <FontAwesomeIcon icon={faShoppingBag} />
      <span className="item-count">{itemCount}</span>
      <span className="item-price">Total: ${totalPrice.toFixed(2)}</span>
    </div>
  );
};

export default CartItem;
