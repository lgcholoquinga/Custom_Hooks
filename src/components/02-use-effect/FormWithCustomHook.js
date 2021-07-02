/* REACT */
import React, { useEffect } from 'react'

/* HOOKS */
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

  const [ formValues, handleInputChnage ] = useForm({ name: '', email: '', password: '' });

  const  { name, email, password } = formValues;

  useEffect(() => {
    console.log('Email changed..');
  }, [email]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  
  return (
    <div className='container'>
      <h4>Form With Custom Hook</h4>
      <hr />
      <form onSubmit={handleSubmit}>
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

          <input 
            type="password" 
            name="password" 
            placeholder="*****" 
            className="form-control mb-2"
            value={ password } 
            onChange={ handleInputChnage }
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
