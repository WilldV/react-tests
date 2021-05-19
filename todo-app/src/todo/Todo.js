import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={item.id}>
            {item.text} {index}
            <button
              key={'button-' + item.id}
              onClick={() => this.props.handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  //TODO: Review delete todo method
  render() {
    const { userName } = this.props;
    return (
      <div>
        <h3>
          {userName}'
          {userName[userName.length - 1].toLowerCase() === 's' ? '' : 's'} to do
          list:
        </h3>
        <TodoList items={this.state.items} handleDelete={this.handleDelete} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What do you need to do?</label>
          <br></br>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add to do #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState((state) => ({
      ...state,
      text: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }

  handleDelete(i) {
    console.log('Deleting ', i);
    console.log(this.state);
    // this.setState((state) => ({
    //   ...state,
    //   items: state.items.splice(i, 1),
    // }));
  }
}

export default Todo;
