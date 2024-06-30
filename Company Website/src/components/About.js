// About.js component

// import all components required by this component
import React, { useContext } from 'react';
import Figure from 'react-bootstrap/Figure';

import { ProductsContext } from './ProductsContext';

import TotalPrice from './TotalPrice';

// figures component imported from
// https://react-bootstrap.github.io/docs/components/figures

// the 'About()' function creates the About webpage
// 
// the condition of 'visible' is passed to the 'ProductsContext' component from the 'Products' component
// the 'About' component can then access the condition of 'visible' from the 'ProductsContext' component
// 'TotalPrice' will be displayed if 'visible' is set to 'true'
//
// the rest of the function displays the images and text relevant to the About page
function About() {

  const { visible } = useContext(ProductsContext);

  return (
    
    <Figure >
        {visible === true &&
        <TotalPrice />
        }
      
      <br></br>
      <Figure.Image
        width={200}
        height={200}
        alt="Company Logo"
        src="/Images/Logo.jpg"
      />
      <Figure.Caption>
        <h1>Green Blue Red Industries</h1>
        <p>We provide high quality goods at sensible prices.</p>
      </Figure.Caption>
        <br></br>
      <Figure.Image
        width={300}
        height={300}
        alt="Our Store One"
        src="/Images/Store1.jpg"
      />
      <Figure.Image
        width={300}
        height={300}
        alt="Our Store Two"
        src="/Images/Store2.jpg"
      />
      <Figure.Caption>
        <p>A view of our large GBR retail store in Central London, and James, Sula and Laura, three of our friendly helpful staff.</p>
      </Figure.Caption>
      <Figure.Image
        width={300}
        height={300}
        alt="Our Store Three"
        src="/Images/Store3.jpg"
      />
      <Figure.Image
        width={300}
        height={300}
        alt="Our Store Four"
        src="/Images/Store4.jpg"
      />
      <Figure.Caption>
        <p>Inside the GBR store and the delicious in-store cafe for all your refreshments.</p>
      </Figure.Caption>
      <h2>Contact Us</h2>
      <p>Please contact us with any questions via the link below. We are here to help.</p>
      <p><a href="http//localhost:3000">Green Blue Red Industries</a></p>
    </Figure>
  );
}

export default About;