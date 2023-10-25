import { useState } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import { Home } from "./Home.jsx"
import { Cart } from './Cart.jsx'
import { Shop } from './Shop'
import './index.css';

function App() {
  const [cartState, setCartState] = useState([]);

  function changeCart(data, number) {
    const index = cartState.findIndex(([data1, _]) => data1 === data);
  
    if (index !== -1) {
      const updatedCartState = cartState.map(([data1, oldNumber], i) => {
        if (i === index) {
          return [data1, oldNumber+number]; 
        }
        return [data1, oldNumber]; 
      });
  
      setCartState(updatedCartState);
    } else {
      setCartState([...cartState, [data, number]]);
    }
  }
  function changeAmmount(id, number) {
    const index = cartState.findIndex(([data1, _]) => data1.id === id);
    
    if (index !== -1) {
      const updatedCartState = cartState.map(([data1, oldNumber], i) => {
        if (i === index) {
          if(oldNumber+number>=1){
          return [data1, oldNumber + number];
          }else{
            return [data1, oldNumber];
          }
        }
        return [data1, oldNumber];
      });
      
      setCartState(updatedCartState);
    }
  }
  function removePurchase(id) {
    const index = cartState.findIndex(([data1, _]) => data1.id === id);
    if (index !== -1) {
      const updatedCartState = cartState.filter(([data1, _], i) => i !== index);
      setCartState(updatedCartState);
    }
  }
  return<>
  
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a className="flex items-center">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Your store</span>
  </a>
  <div className="flex order-2">
  <Link to="/cart">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cart</button>
    </Link>
  </div>
  <div className="text-blue-700 flex justify-center space-x-4 lg:pr-14 sm:pr-4">
    

        <Link to="/">Home</Link>


        <Link to="/shop">Shop</Link>


  </div>
  </div>
</nav>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/shop" element={<Shop changeCart={changeCart}/>} />
    <Route path="/cart" element={<Cart cartState={cartState} changeAmmount={changeAmmount} removePurchase={removePurchase}/>} />
  </Routes>
  </> 
}

export default App
