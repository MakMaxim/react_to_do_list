import React from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import './App.scss';
import { useState } from 'react';
import TasksList from './components/TasksList/TasksList';
import TasksFilter from './components/TasksFilter/TasksFilter';
import { useTasks } from './hooks/useTasks';

function App() {
   const [todos, setTodos] = useState([]);
   const [filter, setFilter] = useState({ sort: '', query: '' });
   const sortedAndSearchedTasks = useTasks(todos, filter.sort, filter.query);

   const addTask = (userInput) => {
      if (userInput) {
         const newTask = {
            id: Date.now(),
            value: userInput,
            complete: 'no',
         };
         setTodos([...todos, newTask]);
      }
   };
   const editTodo = (id, editValue) => {
      setTodos([
         ...todos.map((task) =>
            task.id === id ? { ...task, value: editValue } : { ...task }
         ),
      ]);
   };
   const removeTask = (id) => {
      const filteredList = [...todos].filter((task) => task.id !== id);
      setTodos(filteredList);
   };
   const toggleTask = (id) => {
      setTodos([
         ...todos.map((task) =>
            task.id === id
               ? { ...task, complete: task.complete === 'no' ? 'yes' : 'no' }
               : { ...task }
         ),
      ]);
   };

   return (
      <div className="App">
         <Header num={sortedAndSearchedTasks.length} />
         <Form addTask={addTask} />
         <TasksFilter filter={filter} setFilter={setFilter} />
         <TasksList
            todos={sortedAndSearchedTasks}
            removeTask={removeTask}
            toggleTask={toggleTask}
            editTodo={editTodo}
         />
      </div>
   );
}

export default App;
