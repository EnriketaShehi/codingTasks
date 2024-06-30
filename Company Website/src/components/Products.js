// Products.js component

// import all components required by this component
import React, { useContext, useState, useEffect } from 'react';

import { ProductsContext } from './ProductsContext';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "./Products.css";

import TotalPrice from './TotalPrice';

// the 'Products()' function creates the Products page
//
// it creates the 'visible' and 'products' constants which are then used to manage the display of the 'TotalPrice'
// and the record of how many products have been purchased respectively
//
// the condition of 'visible' is passed to the 'ProductsContext' component from the 'Products' component
// the 'About' component can then access the condition of the 'visible' constant from the 'ProductsContext' component
function Products() {

  const { visible, setVisible } = useContext(ProductsContext);
  const { products, setSavedProducts } = useContext(ProductsContext);

  // the 'savedProducts' variable referred to below is defined in the 'ProductsContext' component
  // it is used to calculate the 'TotalPrice' of the products selected by the user with the Buy button

  // 'add' adds a product to the list of 'savedProducts'
  const add = (product) => {
    setSavedProducts({ product, type: "add" });
  };

  // 'remove' removes a product from the list of 'savedProducts'
  const remove = (product) => {
    setSavedProducts({ product, type: "remove" });
  }

  // the 'styleName' constant is used in setting the style and hence colour of the text on the Choose Colour button
  const [styleName, setStyleName] = useState("text-body bg-light");

  // 'Click1' is used to set the style and hence colour of the text on the Choose Colour button
  const click1 = styleName => {
    setStyleName(styleName)
  }

  useEffect(() => {
    document.getElementById("dropdown-button").className = styleName;
    }
  )

  // map the products into a new array of JSX nodes as arrayProductList

  // card imported from
  // https://react-bootstrap.github.io/docs/components/cards

  // dropdown button imported from
  // https://react-bootstrap.github.io/docs/components/dropdowns

  // the <DropdownButton ...> sections below allow the user to select a product in red, green, or blue
  // the colour of the text on the Choose Colour button changes to match the colour selected by the user

  // the Buy <Button ...> below calls a function to add a product to the 'savedProducts' list
  // and also calls a function to make the 'TotalPrice' visible by setting 'visible' to 'true'
  // the Remove <Button ...> below calls a function to remove a product from the 'savedProducts' list


  const arrayProductList = products?.map(product => 
    <li key={product.id}>

      <Card>
      <Card.Img variant="top" src={product.image} class="responsive" />
              
      <Card.Body>
          <Card.Title style={{ color: 'black' }} >{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>£{product.price}</Card.Text>

          <DropdownButton id="dropdown-button" title= {
            <span className={styleName}>Choose colour</span>
          }>
            <Dropdown.Item onClick = {
              () => click1("text-danger bg-light")
            }>Red</Dropdown.Item>

            <Dropdown.Item onClick = {
              () => click1("text-success bg-light")
            }>Green</Dropdown.Item>
            
            <Dropdown.Item onClick = {
              () => click1("text-primary bg-light")
            }>Blue</Dropdown.Item>

          </DropdownButton>
          <br></br>
          
          <Button onClick={() => {add(product); setVisible(true)}} variant="primary">Buy</Button>
          <Button onClick={() => remove(product)} variant="primary">Remove</Button>
          
      </Card.Body>
      </Card>
    </li>
  )
  
  // the 'TotalPrice' (when visible) and 'arrayProductList' are returned
  // note that the contents of the 'arrayProductList' are stored in the 'ProductsContext' component
  // the 'Products.css' file used to style the product images ensures that the images are responsive
  return (
    <div className="container" id="PriceDiv">
      {visible === true &&
        <TotalPrice />
      }
      
      <div>
        <h1>Product List</h1>
        <p></p>
      </div>

      {/* returning arrayDataItems wrapped in <ul> */}
      <ul>{arrayProductList}</ul>

    </div>
  );
};

export default Products;