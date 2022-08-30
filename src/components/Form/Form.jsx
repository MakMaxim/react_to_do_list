import React from 'react';
import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import './Form.scss';

const Form = ({ addTask }) => {
   const [userInput, setUserInput] = useState('');

   const handlePressKey = (e) => {
      if (e.key === 'enter') {
         handleSubmit(e);
      }
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      addTask(userInput);
      setUserInput('');
   };

   return (
      <form onSubmit={handleSubmit} className="form">
         <MyInput
            type="text"
            placeholder="введите значение"
            value={userInput}
            autoFocus
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handlePressKey}
         />
         <MyButton>Добавить</MyButton>
      </form>
   );
};

export default Form;
