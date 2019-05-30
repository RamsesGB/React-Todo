import React from 'react';




class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    addTask = event2 => {
        event2.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        });
    };

    handleChanges = event2 => {
        this.setState({
            [event2.target.name]: event2.target.value
        });
    };

    

    clearCompleted = () => {

    }

    render(){
        return(
            <form onSubmit='this.addTask'>
                <input name='task' value='this.state.task' onChange='this.state.handleChanges'/>
            </form>
        );
    };
}

export default TodoForm;