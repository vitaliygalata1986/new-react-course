import { Component } from 'react';
import ChildComponent from '../ChildComponent/ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [0, 0, 0],
    };
  }
  increment = (index) => {
    this.setState((prevState) => {
      const newCounts = [...prevState.counts];
      // console.log(newCounts); // [0, 0, 0]
      newCounts[index] += 1; // [1, 0, 0] - если был первый индекс, [0, 1, 0] - если второй и так далее
      return { counts: newCounts };
    });
  };
  render() {
    return (
      <div>
        {this.state.counts.map((count, index) => (
          <ChildComponent
            key={index}
            count={count}
            onIncrement={() => this.increment(index)}
          />
        ))}
      </div>
    );
  }
}

export default ParentComponent;
