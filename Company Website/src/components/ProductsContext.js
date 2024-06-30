// ProductsContext.js component

// import all components required by this component
import React, { createContext, useReducer, useState } from "react";

// the array of products is stored in the 'ProductsContext' component
const productList = [
    {
      id: 0, 
      image: "/Images/Bucket.jpg",
      name: "Metal Bucket",
      description: "A sturdy and practical metal bucket.",
      price: 9.99
    },
  
    {
      id: 1,
      image: "/Images/Chair.jpg",
      name: "Chair",
      description: "A lightweight but strong plastic chair.",
      price: 19.99
    },

    {
        id: 2,
        image: "/Images/Dress.jpg",
        name: "Summer Dress",
        description: "An elegant, stylish summer dress.",
        price: 24.99
    },

    {
        id: 3,
        image: "/Images/Lamp.jpg",
        name: "Lamp",
        description: "An elegant modern lamp.",
        price: 14.99
    },

    {
        id: 4,
        image: "/Images/Mug.jpg",
        name: "Ceramic Mug",
        description: "A robust and capacious mug.",
        price: 4.99
    },

    {
        id: 5,
        image: "/Images/Plate.jpg",
        name: "Ceramic Plate",
        description: "An elegant modern plate.",
        price: 9.99
    },

    {
        id: 6,
        image: "/Images/Spade.jpg",
        name: "Plastic Spade",
        description: "An innovative and sturdy plastic spade.",
        price: 9.99
    },

    {
        id: 7,
        image: "/Images/Spoon.jpg",
        name: "Metal spoon",
        description: "A fashionable and practical spoon.",
        price: 4.99
    },

    {
        id: 8,
        image: "/Images/Trousers.jpg",
        name: "Men's Trousers",
        description: "A fashionable and durable men's trousers.",
        price: 24.99
    },

    {
        id: 9,
        image: "/Images/T-Shirt.jpg",
        name: "Plain T-Shirt",
        description: "A light and stylish T-shirt.",
        price: 4.99
    }
];

// the 'savedProductsReducer' handles adding and removing products from the list of products selected by the user
const savedProductsReducer = (state, action) => {

    const { product, type } = action;

    if (type === "add") return [...state, product];

    if (type === "remove") {
        const productIndex = state.findIndex((x) => x.name === product.name);

        if (productIndex < 0) return state;

        const stateUpdate = [...state];

        stateUpdate.splice(productIndex, 1);
        return stateUpdate;
    }
    return state;
}

// the use of the Context API ensures that the state of various constants ('visible', 'products' and 'savedProducts' in this case)
// are available to other components in the program - this avoids the need to manually pass props between components
// the component 'ProductsContext' handles the export of the context to the other components in the program
export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState(productList);
    const [savedProducts, setSavedProducts] = useReducer(savedProductsReducer, []);

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
                savedProducts,
                setSavedProducts,
                visible,
                setVisible
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
}