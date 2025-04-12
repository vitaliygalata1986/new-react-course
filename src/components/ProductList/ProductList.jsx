import { useCallback, useMemo, useState } from 'react';
import { ProductItem } from './ProductItem';

function ProductList({ products }) {
  const [count, setCount] = useState(0);

  // useCallback сохраняет ту же ссылку на handleItemClick между рендерами (если зависимости не меняются),
  // что предотвращает лишние ререндеры дочернего компонента, если он обёрнут в React.memo
  // Используется для предотвращения лишних ререндеров ProductItem,
  // так как функция передаётся в пропс и может вызвать ререндер при изменении ссылки

  const handleItemClick = useCallback((id) => {
    console.log('Item clicked at index', id);
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Рендерить - {count}</button>
      <ProductItem onItemClick={handleItemClick} products={products} />
    </>
  );
}

export default ProductList;
