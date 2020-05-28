import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  console.log('count', count);

  function increment(value = 1) {
    dispatch({ type: 'COUNTER_INCREMENT', value });
  }

  function decrement(value = -1) {
    dispatch({ type: 'COUNTER_INCREMENT', value });
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => increment(Number(incrementAmount) || 0)}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;
