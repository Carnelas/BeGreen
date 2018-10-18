import axios from 'axios';

class User {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/private`,
      withCredentials: true
    });
  }

  user = (username, password, phone, role) => {
    return this.service.post('/user', { username, password, phone, role })
      .then(response => response.data)
  }
  showUsers = () => {
    return this.service.get('/user')
      .then(response => {
        return response.data
      })
  }
}
export default User;