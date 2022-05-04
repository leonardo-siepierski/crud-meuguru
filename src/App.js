import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'create'} element={<CreateUser />} />
        <Route path={'update/:email'} element={< UpdateUser/>} />
        <Route exact path={'/'} element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;