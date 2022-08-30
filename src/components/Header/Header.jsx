import React from 'react';
import './Header.scss';

const Header = ({ num }) => {
   return (
      <div>
         <h1 className="header">Список задач. </h1>
         <h3 className="header__quantity">Количество задач: {num}</h3>
      </div>
   );
};

export default Header;
