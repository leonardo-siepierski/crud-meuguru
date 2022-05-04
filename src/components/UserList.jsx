import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/requests';
import Header from './Header';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await userService.getAllUsers();
    setUsers(res.data);
  }

  const deleteUser = async (email) => {
    await userService.deleteUser(email);
    getUsers();
  }

  return (
    <div>
      <Header />
      <div className='position-absolute top-50 start-50 translate-middle'>
        <div>
          <h1>Users List</h1>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td>
                      <Link className='btn btn-link' to={`edit/${user.email}`}>Edit</Link>
                      <button className='btn btn-danger' onClick={() => deleteUser(user.email)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserList;