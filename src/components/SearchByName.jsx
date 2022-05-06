import { useState } from 'react';
import userService from '../services/requests';
import Header from './Header';
import Pagination from 'react-paginate';

function SearchByName() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [isUsers, setIsUsers] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

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

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
    const displayUsers = users
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((user, index) => {
        return (
          <tr key={index}>
            <td>{ user.id }</td>
            <td>{ user.name }</td>
            <td>{ user.email }</td>
          </tr>
        )
      });

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
                    displayUsers
                  }
                </tbody>
              </table>
              <Pagination
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination container"}
                previousLinkClassName={"page-link"}
                pageLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                disabledClassName={"page-item disabled"}
                activeClassName={"page-item active"}
              />
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