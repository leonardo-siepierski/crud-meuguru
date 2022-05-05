import Header from './Header';
import { useState } from 'react';
import userService from '../services/requests';

function SearchUser() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(false);

  const getUserByEmail = async (event) => {
    event.preventDefault();
    const res = await userService.getUser(email);
    setUser(res.data);
    setSelectedUser(true);
  };

  const returnButton = (event) => {
    event.preventDefault();
    setSelectedUser(false);
    setEmail('');
  };

  return (
    <div>
      <Header />
      <div className='position-absolute top-50 start-50 translate-middle'>
        {
          selectedUser ? (
            <>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    <tr>
                      <td>{ user.id }</td>
                      <td>{ user.name }</td>
                      <td>{ user.email }</td>
                      <td>{ user.password }</td>
                    </tr>
                  }
                </tbody>
              </table>
              <button type='button' className='btn btn-success' onClick={returnButton}>Return to search</button>
            </>
          ) : (
          <>
            <form onSubmit={getUserByEmail}>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Search by email:
                  <input 
                    type='text'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
                <div>
                  <button type='submit' className='btn btn-success'>Search</button>
                </div>
              </div>
            </form>
          </>           
          )
        }
      </div>
    </div>
  )
}

export default SearchUser;