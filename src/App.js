import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        width: '25rem',
        border: '3px solid tomato',
        margin: 'auto',
        marginTop: '10rem',
        padding: '20px',
      }}
    >
      <h1 style={{ margin: 'auto', width: 'fit-content', color: '' }}>
        {' '}
        Counter App!
      </h1>
      <div
        style={{ border: '5px solid', textAlign: 'center', marginTop: '20px' }}
      >
        <FaPlay
          fontSize="35px"
          style={{ rotate: '-90deg' }}
          onClick={() => setCount(count + 1)}
        />
        <br />
        <div>
          <FaPlay
            fontSize="35px"
            style={{ rotate: '60deg' }}
            onClick={() => setCount(count - 10)}
          />
          <span style={{ fontSize: '40px', fontWeight: 'bold' }}> {count}</span>
          <FaPlay
            fontSize="35px"
            style={{ rotate: '0deg', marginLeft: '15px' }}
            onClick={() => setCount(count + 10)}
          />
          <br />
        </div>
        <FaPlay
          fontSize="35px"
          style={{ rotate: '90deg' }}
          onClick={() => setCount(count - 1)}
        />
      </div>
    </div>
  );
}
