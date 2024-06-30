// TotalPrice.js component

// import all components required by this component
import React, { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

// the function 'TotalPrice()' uses the state of 'savedProducts' from the 'ProductsContext' component
// to calculate the total price of products clicked on by the user
// the price of the most recent product selected by the user is added to the 'totalPrice' which is then stored
function TotalPrice() {
  const { savedProducts } = useContext(ProductsContext);

  // the function 'getTotalPrice' calculates the total price using the list of 'savedProducts' since this list stores the price of each product
  // 'savedProducts' is reduced to obtain the 'item.price', that is the price of the product
  const getTotalPrice = (savedProducts) => {
    const totalPrice = savedProducts.reduce(
      (totalCost, item) => totalCost + item.price,
      0
    );
    return Number(totalPrice.toFixed(2));
  };
  
  return (
    <header>
      <h2 style={{ textAlign: "right" }}> Total price: £{getTotalPrice(savedProducts)} </h2>
      <p style={{ textAlign: "right" }}> Number of products purchased: {savedProducts.length} </p>
    </header>
  );
}

export default TotalPrice;