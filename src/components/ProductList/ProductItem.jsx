import { memo } from 'react';

// благодаря memo этот компонент не будет перерендериваться
// он будет перерендериваться только если зависимости изменились (name)
export const ProductItem = memo(({ name }) => {
  console.log('Меня рендерят');
  return <li>{name}</li>;
});

export default ProductItem;
