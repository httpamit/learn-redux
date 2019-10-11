import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const { counter, isLogged } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(5))
  };

  const handleDecrement = () => {
    dispatch(decrement(2))
  }

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {isLogged &&
        <p>
          Valuable information
      </p>}
    </div>
  );
}

export default App;
