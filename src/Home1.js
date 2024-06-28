import React from 'react';
import { Link } from 'react-router-dom';

const Home1 = () => {
  return (
    <div>
      <h1>Home1 Page</h1>
      <Link to="/product">
        <button>Go to Product Page</button>
      </Link>
    </div>
  );
};

export default Home1;
