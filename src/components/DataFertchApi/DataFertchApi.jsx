import { useEffect, useState } from 'react';

function DataFertchApi() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []); // пустой массив означает, что эффект выполнится только один раз после первого рендеринга
  //}, [count]); // теперь обращение к серверу происходит каждый раз в момент клика по кнопке

  if (loading) {
    return <div>Загрузка</div>;
  }

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Inrement counter</button>
    </>
  );
}

export default DataFertchApi;
