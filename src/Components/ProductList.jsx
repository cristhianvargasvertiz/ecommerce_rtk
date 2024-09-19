import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';
import './ProductList.css'; // Import CSS file for component-specific styles

const ProductList = () => {
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products, valor inicial [] array vacia

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
    // una vez que se agrega el item al carrito se registra y se desabilita volver a agregar ese item al carrito
    // recuerda que: setState(newState) pero en este caso se da una array con los valores propagados (...) anadiendo al nuevo valor los que fueron agregados anteriormente de esta forma setDisabledProducts([...disabledProducts, product.id]);
    // para clarificar cuando setState(newState) solo tiene un valor se pasa directo siendo el que reemplaza a "State" posteriormente
    // en este caso como disabledProducts es un array vacio se iran agregando los id de los productos ya agregados al carrito 
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button 
              className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`} 
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.id)} // Disable button if product is in disabledProducts
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;