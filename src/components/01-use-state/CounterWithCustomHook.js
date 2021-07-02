import React from 'react'

import { useCounter } from '../../hooks/useCounter';


export const CounterWithCustomHook = () => {

  const { state: counter, increment, decrement, reset } = useCounter(0);

  return (
    <div className='container'>
      <h4>Counter Custom Hook: { counter }</h4>
      <hr />
      <button className='btn btn-primary' onClick={  () => increment() }>+1</button>
      <button className='btn btn-success' onClick={ reset }>Reset</button>
      <button className='btn btn-danger' onClick={ () => decrement() }>-1</button>
    </div>
  )
}
