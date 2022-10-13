import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './cartwidget.css'


const CartWidget = () => {
  return (
    <div className="Ingresar">
      <FontAwesomeIcon icon={faUser} size="2x" color="black" />
      <button>Ingresar</button>
    </div>
  );
};

export default CartWidget;