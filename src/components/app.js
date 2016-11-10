import React, { Component } from 'react';
import Firebase from 'firebase';
import _ from 'lodash';

const config = {
  apiKey: 'AIzaSyBIfpuEG_mO_-LfJIcD2kJ6GCRmD5sa4T8',
  authDomain: 'reactcoderfactorytutorial.firebaseapp.com',
  databaseURL: 'https://reactcoderfactorytutorial.firebaseio.com',
  storageBucket: 'reactcoderfactorytutorial.appspot.com',
  messagingSenderId: '267058862385',
};

Firebase.initializeApp(config);

let count = 0;

// creates a reference to your storage bucket
const database = Firebase.database();

const allItemsRef = database.ref('items_listas');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    allItemsRef.on('child_added', (dataSnapshot) => {
      this.setState({
        items: this.state.items.concat([dataSnapshot.val()]),
      });
    });
    allItemsRef.on('child_removed', (dataSnapshot) => {
      this.setState({
        items: _.reject(this.state.items, (elem) => elem.key === dataSnapshot.val().key),
      });
    });
  }

  addTodo() {
    const data = count++;
    database.ref(`items_listas/${data}`).set({ text: `Hi there ${data}`, key: data });
  }

  removeTodo(data) {
    database.ref(`items_listas/${data}`).remove();
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {_.map(_.filter(items), (item) => <div onClick={() => this.removeTodo(item.key)}>{item.text}</div>)}
        <button onClick={() => this.addTodo()}>Add Data</button>
      </div>
    );
  }
}
