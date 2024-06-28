import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product from './Product';
import ThankYou from './ThankYou';
import Home1 from './Home1';
import React, { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T4X7N2R');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/product" element={<Product />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
