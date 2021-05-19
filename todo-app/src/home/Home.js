import { Component } from 'react';
import Todo from '../todo';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', isLogged: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let componentToRender = (
      <div>
        <h3>Write your name, stranger</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            id="user-name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button>This is my name</button>
        </form>
      </div>
    );
    if (this.state.isLogged) {
      componentToRender = <Todo userName={this.state.name} />;
    }
    return componentToRender;
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name.length === 0) {
      return;
    }
    this.setState((state) => ({
      name: state.name,
      isLogged: true,
    }));
  }
}

export default Home;
