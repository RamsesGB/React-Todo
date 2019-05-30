import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


// Data
const ToDoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Learn React',
    id: 1234,
    completed: false
  },
  {
    task: 'Code',
    id: 56789,
    completed: false
  }
];

// Base class 
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      ToDoData

    };
  }

  addTaskFromForm = taskName => {
    // add task from TodoForm.js to App.js
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      return {
        ToDoData: [...prevState.ToDoData, newTask]
      };
    });
  };

  toggleTask = cb => {

  }

  render() {
    return (
      <div className='App'>

        <div className='header'>
          <h2>Hey, start your To-Do!</h2>
          <TodoForm addTask={this.addTaskFromForm} />
        </div>

        <TodoList toDoTasks={this.state.ToDoData} toggleTask={this.toggleTask}/>
      </div>
    );
  }
}

export default App;
