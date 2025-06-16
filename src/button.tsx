import React, { useEffect, useState} from 'react';
import './app.css';

export function Button (props: {addEmployee}){
    return (
        <div >
            <button className = "button" onClick = {props.addEmployee} > Добавить сотрудника </button>
        </div>
    );
}
