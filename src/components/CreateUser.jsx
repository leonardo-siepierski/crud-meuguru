import { useState } from 'react';
import userService from '../services/requests';
import Header from './Header';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveUser = async (event) => {
    event.preventDefault();
    await userService.createUser({
      name,
      email,
      password
    });
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <Header />
      <div className='position-absolute top-50 start-50 translate-middle'>
        <h1>Create User</h1>
        <form onSubmit={saveUser}>
          <div className='mb-3'>
            <label className='form-label' htmlFor='name'>
              Name:
              <input
                type='text'
                id='name'
                name='name'
                className='form-control'
                value={ name }
                onChange={(event) => setName(event.target.value)}
              />
            </label>
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>
              Email:
              <input
                type='text'
                id='email'
                name='email'
                className='form-control'
                value={ email }
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='password'>
              Password:
              <input
                type='text'
                id='password'
                name='password'
                className='form-control'
                value={ password }
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <div>
            <button className='btn btn-success' type='submit'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser;