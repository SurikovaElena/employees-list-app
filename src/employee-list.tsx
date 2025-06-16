import React, { useEffect, useState} from 'react';
import './app.css';
import { TEmployees } from './index';

export function EmployeeList (props: {employeeList : TEmployees}){
    return (
    <div> 
        <div className = 'grid-container'>
            {props.employeeList.map(employee => (
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