function Header() {
  return (
    <header className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>Home</a>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='/create'>Create User</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/users'>Users</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/search'>Search by email</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;