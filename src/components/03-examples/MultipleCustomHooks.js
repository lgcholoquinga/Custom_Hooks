import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

  const  { state: counter, increment } = useCounter(1);

  const { loading, data } =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];


  return (
    <div className="container">
      <h1>Custom Hooks - (API BreakingBad Quotes)</h1>
      <hr />

      {
        loading
        ?
        (
          <div className="alert alert-info text-center">
            <p>Loading</p>
          </div>
        )
        :
        (
          <blockquote className="blockquote text-right">
            <p className="mb-2">{ author }</p>
            <footer className="blockquote-footer">{ quote }</footer>
          </blockquote>
        )
      }

      <button className="btn btn-warning" onClick={ () => increment() }>Next</button>
    </div>
  )
}
