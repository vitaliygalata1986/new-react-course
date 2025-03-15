import { Component } from 'react';

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Вася',
      age: 24,
    };
  }
  updateName = () => {
    this.setState({ name: 'Петя' });
  };
  updateAge = () => {
    this.setState({ age: 30 });
  };
  render() {
    return (
      <div>
        <p>Имя: {this.state.name}</p>
        <p>Возраст: {this.state.age}</p>
        <button onClick={this.updateName}>Change name</button>
        <button onClick={this.updateAge}>Change age</button>
      </div>
    );
  }
}
export default UserProfile;