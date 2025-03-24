import { useState } from 'react';

function MyComponent({ count = 0, increment, styles }) {
  return (
    <div style={styles}>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Increment count</button>
    </div>
  );
}

function MyComponent2({ count = 0, increment, styles }) {
  return (
    <div style={styles}>
      <p>Второй Счетчик: {count}</p>
      <button onClick={increment}>Increment count</button>
    </div>
  );
}

function MyComponent3({ count = 0, increment, styles }) {
  return (
    <div style={styles}>
      <p>Третий Счетчик: {count}</p>
      <button onClick={increment}>Increment count</button>
    </div>
  );
}

function withCounter(MyComponent, initialCount = 0, styles) {
  function WithCounterComponent(props) {
    const [count, setCount] = useState(props.initialCount || initialCount);

    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return (
      <MyComponent
        styles={styles}
        count={count}
        increment={increment}
        {...props}
      />
    );
  }
  return WithCounterComponent;
}

export const EnhancedComponent1 = withCounter(MyComponent, 0, {
  background: 'red',
});
export const EnhancedComponent2 = withCounter(MyComponent2, 10, {
  background: 'blue',
});
export const EnhancedComponent3 = withCounter(MyComponent3, 20, {
  background: 'green',
});

/*
withCounter - компонент высшего порядяка
*/
