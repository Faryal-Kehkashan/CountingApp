import './App.css';
import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  const plus = () => {
      setCount(count + 1)
  }
  const minus = () => {
      setCount(count - 1)
  }

  return(
      <div className='App'>
      <button onClick={plus}>+</button>
      <a> {count}</a>
      <button onClick={minus}>-</button>
      </div>
  );
}

export default App;
