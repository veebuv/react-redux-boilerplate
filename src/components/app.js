import React, { Component } from 'react';
import InputField from './inputField';
import TodoList from './todoList';
import { connect } from 'react-redux';
import { addToList } from '../actions';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  render() {
    const { inputValue } = this.state;
    const { listOfItems } = this.props.listOfItems;
    return (
      <div>
        <InputField
          inputValue={inputValue}
          textChange={(inputValue) => this.setState({ inputValue })}
          addToList={(data) => this.props.dispatch(addToList(data)) }
        />
        <TodoList listOfItems={listOfItems} />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    listOfItems: state.listOfItems,
  }
);

export default connect(mapStateToProps)(App);
