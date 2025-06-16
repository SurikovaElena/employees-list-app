import React, { useEffect, useState} from 'react';
import { Button } from './button';

export function Input (){
    const [inputName, setInputName] = useState('');
    return (
        <div>
            <div className = "headline"> Введите ФИО сотрудника, которого хотите добавить:</div>
            <input 
                type="text"                 
                name='inputName' 
                value={inputName} 
                className = "input"
                onChange={(event) => setInputName(event.target.value)}
                />
                <Button inputValue = {inputName}/>
        </div>
    );
}