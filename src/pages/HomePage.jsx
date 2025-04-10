import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';

const HomePage = () => {
  const products = [];
  for (let i = 0; i < 5; i++) {
    products.push({
      id: i + 1,
      name: `Product ${i + 1}`,
    });
  }
  return <ProductList products={products} />;
};

export default HomePage;
