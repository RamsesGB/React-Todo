// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoTask from './Todo';


const TodoList = props => {
    return(
        <div className='task-list'>
            {props.toDoDataArray.map(task => {
                return (
                    <TodoTask 
                        key={task.id}
                        toggleTaskFunc={props.toggleTaskFunc}
                        task={task}
                    />
                );
            })}
        </div>
    );
};


export default TodoList;
