import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid"


class App extends Component {
  state={
     items: [],
     id:uuid(),
     item:'',
     editItem:false
  }
  //method to handle changes on input from ui
  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  };
  //handle submit to add in the input from ui
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    //to push newItem to update the old empty state without mutating the old state
    const updatedItems=[...this.state.items,newItem];
     this.setState({
       items:updatedItems,
       item:'',
       id:uuid(),
       editItem:false
     });
  };
  //method to delete all items from todolist
   clearList = () =>{
    this.setState({
       items:[]
    });
   }
  //method to delete each item from todo
   handleDelete = (id) =>{
      const filteredItems = this.state.items.filter(item => item.id !== id);
      this.setState({items:filteredItems});
   };

  render() {
    return (

      <div className = "container" >
        <div className="row" >
          <div className="col-10 mx-auto col-md-8 mt-4" >
            <h3 className="text-capitalize text-center" > make your todo input </h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>

    );
  }
 
}

export default App;
