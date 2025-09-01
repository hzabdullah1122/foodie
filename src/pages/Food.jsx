import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
} from "lucide-react";
import '../App.css';

const Food = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const foodItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 2,
      name: "Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      price: 10.50,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan, croutons, and Caesar dressing",
      price: 8.75,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 4,
      name: "Chocolate Cake",
      description: "Rich chocolate cake with layers of chocolate ganache",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80"
    },
    {
      id: 5,
      name: "Grilled Salmon",
      description: "Fresh salmon fillet with lemon butter sauce and vegetables",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 6,
      name: "Fruit Smoothie",
      description: "Refreshing blend of seasonal fruits and yogurt",
      price: 5.50,
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
    },
    {
      id: 7,
      name: "Chicken Tikka Masala",
      description: "Tender chicken in a rich, creamy tomato sauce with spices",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    },
    {
      id: 8,
      name: "Sushi Platter",
      description: "Assorted fresh sushi with salmon, tuna, and avocado",
      price: 18.50,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
    },
    {
      id: 9,
      name: "Vegetable Stir Fry",
      description: "Fresh vegetables wok-tossed in a savory sauce",
      price: 11.25,
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
    },
    {
      id: 10,
      name: "Beef Tacos",
      description: "Three crispy tacos with seasoned beef, lettuce, and cheese",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
    },
    {
      id: 11,
      name: "Mushroom Risotto",
      description: "Creamy Arborio rice with wild mushrooms and Parmesan",
      price: 13.75,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 12,
      name: "Apple Pie",
      description: "Homemade pie with cinnamon-spiced apples and flaky crust",
      price: 7.25,
      image: "https://images.unsplash.com/photo-1562007908-859b4ba9a1a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    }
  ];
  const [notification, setNotification] = useState(null);


  const addToCart = (id) => {
    const item = foodItems.find(food => food.id === id);
    const existingItem = cart.find(cartItem => cartItem.id === id);

    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cart.find(cartItem => cartItem.id === id);

    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== id));
    }
  };

  const getQuantity = (id) => {
    const cartItem = cart.find(item => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setNotification("Your cart is empty. Please add some items before checkout.");
      setTimeout(() => setNotification(null), 5000);
      return;
    }

    setNotification("✅ Thank you for your order! It will be ready soon.");
    setCart([]);

    setTimeout(() => setNotification(null), 5000);
  };


  return (
    <>
      {notification && (
        <div className="notification-slide">
          {notification}
        </div>
      )}

      <header className="restaurant-header">
        <div className="header-container">
          <h1 className="restaurant-logo">🍽️ Foodie</h1>
          {/* <nav className="restaurant-nav">
            <a href="#menu">Menu</a>
            <a href="#order">Order</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav> */}
        </div>
      </header>
      <div className="food-ordering-section">
        <div className="food-section-header">
          <p className="para-1">Our Menu</p>
          <h2>Most Popular Dishes</h2>
          <p className="para-2">Discover our chef's special selections that customers love the most</p>
        </div>

        <div className="food-ordering-container">
          <div className="food-menu-grid">
            {foodItems.map(item => (
              <div key={item.id} className="food-menu-item">
                <div
                  className="food-item-image"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="food-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="food-item-price">${item.price.toFixed(2)}</div>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn minus"
                      onClick={() => removeFromCart(item.id)}
                    >-</button>
                    <span className="quantity-display">{getQuantity(item.id)}</span>
                    <button
                      className="quantity-btn plus"
                      onClick={() => addToCart(item.id)}
                    >+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary-panel" id="order">
             <button className="back-button" onClick={() => navigate(-1)}>
               <ArrowLeft size={20} />
            </button>
            <h2>Your Order</h2>
            <div className="order-items-container">
              {cart.length === 0 ? (
                <div className="empty-cart-message">Your cart is empty</div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="order-item">
                    <span className="item-name">{item.name} x{item.quantity}</span>
                    <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            <div className="order-total-amount">Total: ${getTotal().toFixed(2)}</div>

            <button className="checkout-button" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
           
          </div>

        </div>
      </div>
    </>
  );
};

export default Food;