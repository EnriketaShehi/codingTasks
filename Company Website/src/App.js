// App.js component

// import all components required by this component
import React from "react";
import { Routes, Route } from 'react-router-dom';

import { ProductsProvider } from './components/ProductsContext';

import NavigationMenu from './components/NavigationMenu';

import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';

// the 'App()' function wraps the 'NavigationMenu' and the routes to the Home, Products and About pages in the 'ProductsProvider'
// the components inside the provider component can subscribe to context changes without the need to pass these changes through intermediary components
export default function App() {
 
  return (
    <ProductsProvider>
      <div className="App">
        
        <NavigationMenu />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>

      </div>
    </ProductsProvider>
  );
}