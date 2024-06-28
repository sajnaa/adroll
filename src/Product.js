import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <Link to="/thankyou">
        <button>Go to Thank You Page</button>
      </Link>
    </div>
  );
};

export default Product;
