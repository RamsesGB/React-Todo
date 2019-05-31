import React from 'react';



const TodoTask = props => {
    return(
        <div className='task'>
            <p>{props.task.task}</p>
        </div>
    );
}

export default TodoTask;