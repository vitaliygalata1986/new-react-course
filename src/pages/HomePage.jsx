import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import ParentComponent1 from '../components/ParentComponent1/ParentComponent1';
import UserComponent1 from '../components/UserComponent1/UserComponent1';

const HomePage = () => {
  const products = [];
  for (let i = 0; i < 100; i++) {
    products.push({
      id: i + 1,
      name: `Product ${i + 1}`,
    });
  }
  return (
    <>
      {/* <ProductList products={products} /> */}
      {/* <ParentComponent1 /> */}
      <UserComponent1 />
    </>
  );
};

export default HomePage;
