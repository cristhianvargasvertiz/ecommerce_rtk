import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
  // Inicializar la cantidad de Super Coins
  const [superCoins, setSuperCoins] = useState(0);

  // Obtener los productos del carrito desde el estado global
  const cartItems = useSelector(state => state.cart.cartItems);

  // Calcular el monto total del carrito
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Actualizar la cantidad de Super Coins en función del monto total
  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300) {
      setSuperCoins(30);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  // Renderizar el componente
  return (
    <div className="super-coins" style={{ textAlign: 'center' }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
    </div>
  );
};

export default SuperCoin;
