import { memo } from 'react';

export const ProductItem = memo(({ products, onItemClick }) => {
  console.log('Лист отрендерился снова');

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} onClick={() => onItemClick(product.id)}>
          {product.name}
        </li>
      ))}
    </ul>
  );
});

export default ProductItem;
