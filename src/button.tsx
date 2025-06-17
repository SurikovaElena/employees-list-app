import React, { useEffect, useState} from 'react';

export function Button (props: {addEmployee}){
    return (
        <div >
            <button className = "button" onClick = {props.addEmployee} > Добавить сотрудника </button>
        </div>
    );
}
