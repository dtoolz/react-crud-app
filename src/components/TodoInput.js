import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit} = this.props;
        return (
            <div className="card card-body my-3" >
               <form onSubmit={handleSubmit}>
                   <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-secondary text-white">
                               <i className="fas fa-book"></i>
                           </div>
                       </div>
                       <input type="text" className="form-control text-capitalize" 
                       placeholder="add your todo item here"
                       value={item} onChange={handleChange} 
                        />
                   </div>
                   <button type="submit" className="btn btn-block btn-secondary mt-3" >add item to todo list</button>
               </form>
            </div>
        )
    }
}
