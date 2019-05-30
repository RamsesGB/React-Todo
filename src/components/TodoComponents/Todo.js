import React from 'react';



const TodoTask = props => {
    return(
        <div className='task'>
            <p>{props.task.name}</p>
        </div>
    );
}

export default TodoTask;