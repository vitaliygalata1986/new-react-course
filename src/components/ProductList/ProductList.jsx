import { useMemo, useState } from 'react';
import { ProductItem } from './ProductItem';

function ProductList({ products }) {
  const [filteredList, setFilteredList] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      //  console.time('filter');
      const result = product.name
        .toLowerCase()
        .includes(filteredList.toLowerCase());
      // console.log('Меня вызывают');
      //  console.timeEnd('filter');
      return result;
    });
  }, [products, filteredList]); // зависимости useMemo (если зависимость изменилась, то useMemo будет пересоздан)

  return (
    <>
      <input
        type="text"
        value={filteredList}
        onChange={(e) => setFilteredList(e.target.value)}
        placeholder="Поиск..."
      />
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Рендерить - {renderCount}
      </button>
      <ul>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </>
  );
}

export default ProductList;
