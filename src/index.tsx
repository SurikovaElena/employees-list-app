import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import { Input } from './input';

type TEmployee = {
    id: number;
    name: string;
};

export type TEmployees = TEmployee[];

export const employeesList: TEmployees = [] ;

function App() {
  
  const [currentEmployee, setCurrentEmployee] = useState([]);
  
  return (
        <React.StrictMode>
          <Input />
        </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); 
root.render(<App />); 





