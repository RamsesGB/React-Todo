import React from 'react';



const TodoTask = props => {
    return(
        <div className={`task${props.task.completed ? ' completed' : ''}`} 
            onClick={ () => props.toggleTaskFunc(props.task.id)} 
            >
            <p>{props.task.task}</p>
        </div>
    );
}

// onClick={() => props.toggleItem(props.item.id)}



export default TodoTask;