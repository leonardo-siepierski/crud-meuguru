import { useState } from 'react';
import { useParams } from 'react-router-dom';
import userService from '../services/requests';
import Header from './Header';

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
  };

  return (
    <div>
      <Header />
      <div className='position-absolute top-50 start-50 translate-middle'>
        <form onSubmit={update}>
          <div className='mb-3'>
            <h1>Update User</h1>
            <label className='form-label' htmlFor='name'>
              Name:
              <input
                type='text'
                id='name'
                name='name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button type='submit' className='btn btn-success'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser;