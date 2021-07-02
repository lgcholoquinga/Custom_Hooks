import React, { useEffect, useState } from 'react'

/* COMPONENTS */
import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState;


  useEffect(() => {
    console.log('hey');
  }, []);

  const handleInputChnage = ( { target } ) => {
    setFormState({
      ...formState,
      [ target.name ]: target.value
    });
  };


  return (
    <div className='container'>
      <h4>SimpleForm with UseEffect</h4>
      <hr />

      <div className='form-group'>
        <input 
          type="text" 
          name="name" 
          placeholder="Add Name" 
          className="form-control mb-2"
          value={ name }
          onChange={ handleInputChnage } 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="example@example.com" 
          className="form-control mb-2"
          value={ email } 
          onChange={ handleInputChnage }
        />
      </div>

      { (name === '123') && <Message /> }

    </div>
  )
}
