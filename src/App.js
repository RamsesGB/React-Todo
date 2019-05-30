import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      ToDoData

    };
  }
  
  render() {
    return (
      <div className='App'>

        <div className='header'>
          <h2>Hey, start your To-Do!</h2>
          <TodoForm />
        </div>

        <TodoList />
      </div>
    );
  }
}

export default App;
