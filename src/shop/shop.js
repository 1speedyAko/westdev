import React, { useState } from 'react';
import Navbar from '../navbar/Nav';
import Footer from '../navbar/Footer';


const Shop = () => {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1,
     name: 'leash',
     price: 12.7,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNj5v1pkOOKUzrbe5f1NlY0bNJjvujQhiiIA&usqp=CAU' 
    },

    { id: 2,
    name: 'collar',
    price: 8.8,
    image:'https://i5.walmartimages.com/asr/9ca8f8e9-fcbd-4c84-8197-0fb27f736979.4a53d610b5461f0a5aacff89556cb028.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff' 
    },
    { id: 3,
    name: 'Dog Food',
    price: 3.45,
    image:'https://images-na.ssl-images-amazon.com/images/I/81Z0WaYRYtL._SL1500_.jpg'
     },
  { id: 2.2,
    name: 'Dog Feeder',
    price: 10,
    image:'https://pngimg.com/uploads/dog_food/dog_food_PNG33.png'
    },
  ];

  const addToCart = (product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);
    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <>
      <Navbar/>
          <div className="h-screen bg-gray-100  py-10 py-20 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold mb-6">Shop With Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
                  <div className="aspect-w-4 aspect-h-5 mb-2">
                    <img src={product.image} alt={product.name} className="object-cover object-center w-full h-full" />
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700">${product.price}usd</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 w-40 h-60">
                <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
                <ul className="bg-white p-4 shadow-md rounded-md">
                  {cart.map((item) => (
                    <li key={item.id} className="mb-2">
                      {item.name} - ${item.price} x {item.quantity}{' '}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                  <li className="font-semibold mt-4">
                    Total: ${totalCost.toFixed(2)} {/* Display total cost */}
                  </li>
                </ul>
              </div>
            </div>
            <Footer/>
          </div>

      
    </>
  );
};

export default Shop;
