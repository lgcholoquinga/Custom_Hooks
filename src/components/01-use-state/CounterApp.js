import React, { useState } from 'react'

export const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  const { counter1, counter2 } = state; 

  const handleAdd = () => {
    setState({
      ...state,
      counter1: counter1 + 1
    });
  };

  return (
    <div className='container'>
      <h3>Counter1: { counter1 }</h3>
      <h3>Counter2: { counter2 }</h3>
      <hr />
      <button className='btn btn-primary' onClick={ handleAdd }>+1</button>
    </div>
  )
}
