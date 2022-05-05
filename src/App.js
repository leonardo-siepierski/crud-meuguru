import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.css';
import SearchUser from './components/SearchUser';
import SearchByName from './components/SearchByName';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'create'} element={<CreateUser />} />
        <Route path={'users'} element={<UserList />} />
        <Route path={'users/edit/:email'} element={<UpdateUser />} />
        <Route path={'search'} element={<SearchUser />} />
        <Route path={'search/name'} element={<SearchByName />} />
        <Route exact path={'/'} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;