import React from 'react';
import MyButton from '../UI/button/MyButton';
import { useState } from 'react';
import './Task.scss';
import MyInput from '../UI/input/MyInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, index, editTodo, removeTask, toggleTask }) => {
   const [edit, setEdit] = useState(null);
   const [editValue, setEditValue] = useState('');
   const editTask = (id, value) => {
      setEdit(id);
      setEditValue(value);
   };
   const editItem = () => {
      editTodo(edit, editValue);
      setEdit(null);
   };
   const handlePressKey = (e) => {
      if (e.key === 'Enter') {
         editItem();
      }
   };
   return (
      <div className="task">
         {edit ? (
            <>
               <MyInput
                  type="text"
                  placeholder="введите значение"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={handlePressKey}
               />
               <MyButton onClick={() => editItem()}>Сохранить</MyButton>
            </>
         ) : (
            <>
               <div
                  className={
                     task.complete === 'yes'
                        ? 'task__value task__value_complete'
                        : 'task__value'
                  }
                  onClick={() => toggleTask(task.id)}
               >
                  {index + 1}.{task.value}
               </div>
               <div>
                  <MyButton onClick={() => editTask(task.id, task.value)}>
                     <FontAwesomeIcon icon={faEdit} />
                  </MyButton>
                  <MyButton onClick={() => removeTask(task.id)}>
                     <FontAwesomeIcon icon={faTrash} />
                  </MyButton>
               </div>
            </>
         )}
      </div>
   );
};

export default Task;
