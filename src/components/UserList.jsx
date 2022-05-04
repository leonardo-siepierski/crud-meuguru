import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/requests';

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
      <Link to='/create'>Create User</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
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
                  <Link to={`edit/${user.email}`}>Edit</Link>
                  <button onClick={() => deleteUser(user.email)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserList;