import { useState } from 'react';
import userService from '../services/requests';

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
      <form onSubmit={saveUser}>
        <div>
          <label htmlFor='name'>
            Name:
            <input
              type='text'
              id='name'
              name='name'
              value={ name }
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='email'>
            Email:
            <input
              type='text'
              id='email'
              name='email'
              value={ email }
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='password'>
            Password:
            <input
              type='text'
              id='password'
              name='password'
              value={ password }
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser;