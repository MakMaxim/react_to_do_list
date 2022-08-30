import React from 'react';
import Task from '../Task/Task';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TasksList.scss';

function TasksList({ todos, editTodo, removeTask, toggleTask }) {
   return (
      <div className="list">
         <TransitionGroup>
            {todos.map((task, index) => (
               <CSSTransition key={task.id} timeout={400} classNames="task">
                  <Task
                     task={task}
                     index={index}
                     removeTask={removeTask}
                     toggleTask={toggleTask}
                     editTodo={editTodo}
                  />
               </CSSTransition>
            ))}
         </TransitionGroup>
         {/* {todos.map((task, index) => {
            return (
               <Task
                  key={task.id}
                  task={task}
                  index={index}
                  removeTask={removeTask}
                  toggleTask={toggleTask}
                  editTodo={editTodo}
               />
            );
         })} */}
      </div>
   );
}

export default TasksList;
