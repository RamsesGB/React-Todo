import React from 'react';




class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = event2 => {
        this.setState({
            [event2.target.name]: event2.target.value
        });
    };

    addTask = event2 => {
        // method that allows user to add task into TodoForm 'this.state' data
        event2.preventDefault();
        this.props.addTaskFromForm(this.state.task);
        this.setState({
            task: ''
        });
    };

    // clearCompleted = () => {

    // }

    render(){
        return(
            <form onSubmit={this.addTask}>
                <input
                name='task'
                value={this.state.task}
                onChange={this.handleChanges}/>
                <button>Create Task!</button>
            </form>
        );
    };
}


export default TodoForm;