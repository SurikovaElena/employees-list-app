import React, { useEffect, useState} from 'react';
import './app.css';
import { TEmployees } from './index';

export function EmployeesList (props: {employeesList : TEmployees, shouldUpdate: boolean}){
    const { employeesList, shouldUpdate } = props;
    useEffect(() => {
    }, [shouldUpdate]);
    return (
    <div> 
        <div className = "headline">
            Список сотрудников:
        </div>
        <div className = 'grid-container'>
            {employeesList.map(employee => (
                <div className = "grid-row">
                    <div className = "grid-item"> 
                        {employee.id}
                    </div>
                    <div className = "grid-item"> 
                        {employee.name}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}