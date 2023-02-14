import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [person, setPerson] = useState('232');

  useEffect(() => {
    fetch('http://localhost:3001/info')
    .then(res => res.json())
    .then(res => console.log(res))
  }, [])
  return (
    <div className="App">
     { person }
    </div>
  );
}

export default App;
