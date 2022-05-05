import api from './api';

const getAllUsers = () => {
  return api.get('/users');
};

const getUser = (email) => {
  return api.get(`/users/${email}`);
};

const getByName = (query) => {
  return api.get(`/users/search?searchString=${query}`)
}

const createUser = (user) => {
  return api.post('/users', user);
};

const updateUser = (email, user) => {
  return api.put(`/users/${email}`, user);
};

const deleteUser = (email) => {
  return api.delete(`/users/${email}`);
};

const userService = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getByName,
};

export default userService;