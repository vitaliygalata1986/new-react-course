export function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => {
        const discountedPrice = product.price * 0.9; // Скидка 10%
        return (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Цена без скидки: ${product.price.toFixed(2)}</p>
            <p>Цена со скидкой: ${discountedPrice.toFixed(2)}</p>
          </li>
        );
      })}
    </ul>
  );
}
