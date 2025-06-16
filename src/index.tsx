import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import { Input } from './input';
import { Button } from './button';
import { EmployeeList } from './employee-list';

//тип данных для одного Сотрудника
type TEmployee = {
    id: number;
    name: string;
};

//тип данных для Списка сотрудников
export type TEmployees = TEmployee[];

// Список сотрудников
export const employeeList: TEmployees = [] ;

function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [newEmployeeList, setEmployeeList] = useState(employeeList);

  //получение значения inputa 
  const inputComplete = (event) => { 
    setInputValue(event.target.value)
  };

  //добавление сотрудника + перерисовка
  const addEmployee = () => {
    let id = employeeList.length + 1;
    let newEmployee = {
      id: id,
      name: inputValue
    };
    setEmployeeList([...newEmployeeList, newEmployee]);
    employeeList.push(newEmployee);
  }

  return (
        <React.StrictMode>
          <div className = "headline"> 
            Введите ФИО сотрудника, которого хотите добавить:
          </div>
          <Input inputComplete = {inputComplete}/>
          <Button addEmployee = {addEmployee}/>
          <div className = "headline">
            Список сотрудников:
          </div>
          <EmployeeList employeeList = { employeeList}/>
        </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); 
root.render(<App />); 





