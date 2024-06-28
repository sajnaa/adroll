import React, { useEffect } from 'react';

const ThankYou = () => {
  useEffect(() => {
    // Google Tag Manager event for registration complete
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'registrationComplete',
      'SumSubIdRoll': 'test1',
      'SumSubStatusRoll': '00'
    });
  }, []);

  return (
    <div>
      <h1>Thank You Page</h1>
      <p>Thank you for your registration!</p>
    </div>
  );
};

export default ThankYou;
