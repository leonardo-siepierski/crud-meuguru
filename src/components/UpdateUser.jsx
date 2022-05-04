import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userService from '../services/requests';

function UpdateUser() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { email } = useParams();

  const update = async (event) => {
    event.preventDefault();
    await userService.updateUser(email, {
      name,
      password
    });
    setName('');
    setPassword('');
  }

  useEffect(() => {
    getUserByEmail();
  });

  const getUserByEmail = async () => {
    await userService.getUser(email);
  };

  return (
    <div>
      <form onSubmit={update}>
        <div>
          <label htmlFor='name'>
            Name:
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type='submit'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser;