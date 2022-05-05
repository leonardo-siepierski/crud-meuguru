import { useState } from 'react';
import userService from '../services/requests';
import Header from './Header';

function SearchByName() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [isUsers, setIsUsers] = useState(false);

  const getByName = async (event) => {
    event.preventDefault();
    const res = await userService.getByName(name);
    console.log(name);
    setUsers(res.data);
    setIsUsers(true);
    console.log(users);
  }

  const returnButton = async (event) => {
    event.preventDefault();
    setIsUsers(false);
    setUsers([]);
    setName('');
  };

  return (
    <div>
      <Header />
      <div className='position-absolute top-50 start-50 translate-middle'>
        {
          isUsers ? (
            <div>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, index) => (
                      <tr key={index}>
                        <td>{ user.id }</td>
                        <td>{ user.name }</td>
                        <td>{ user.email }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <button type='button' onClick={returnButton} className='btn btn-success'>
                Return
              </button>
            </div>
          ) : (
            <form onSubmit={getByName}>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Search by name:
                  <input 
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>
                <div>
                  <button type='submit' className='btn btn-success'>Search</button>
                </div>
              </div>
            </form>
          )
        }
      </div>
    </div>
  )
}

export default SearchByName;