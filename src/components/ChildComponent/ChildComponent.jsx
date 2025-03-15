import { Component } from 'react';

/*
class ChildComponent extends Component {
  render() {
    const { count, onIncrement } = this.props;
    return (
      <div>
        <p>Еще счетчик: {count}</p>
        <button onClick={onIncrement}>Прибавить 1</button>
      </div>
    );
  }
}
*/

// через функциональный компонент
function ChildComponent({ count, onIncrement }) {
  return (
    <div>
      <p>Еще счетчик: {count}</p>
      <button onClick={onIncrement}>Прибавить 1</button>
    </div>
  );
}

export default ChildComponent;
