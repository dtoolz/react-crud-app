import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div>
       hi from appjs component
       <TodoInput/>
       <TodoList/>
      </div>
    );
  }
 
}

export default App;
