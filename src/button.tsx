import React, { useEffect, useState} from 'react';
import { employeesList } from './index';
import { EmployeesList } from './employees-list';

export function Button (props: {inputValue: string}){
    const [shouldUpdate, setShouldUpdate] = useState(false);

    function addEmployee () {
        let id = employeesList.length + 1;
        let newEmployee = {
            id: id,
            name: props.inputValue
        };
        employeesList.push(newEmployee);
        setShouldUpdate(prev => !prev);
    }

    return (
        <div >
            <button className = "button" onClick = {addEmployee} > Добавить сотрудника </button>
            <EmployeesList employeesList = { employeesList}  shouldUpdate = {shouldUpdate}/>
        </div>
    );
}
