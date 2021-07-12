import React, {Component} from 'react';

class AddTodo extends Component{
    statr = {
        content: ''
    }

    handleChange = (e) => {
        e.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.reventDefault();
    }

    redner(){
        return(
            <div>
                <form onSubmit={}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;