// CommonLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const CommonLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default CommonLayout;
