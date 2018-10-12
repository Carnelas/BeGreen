import axios from 'axios';

class Items {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/itemCreate',
      withCredentials: true
    });
  }

  add = (itemName, seller, price) => {
    return this.service.post('/add', {itemName, seller, price})
    .then(response => response.data)
  }







}
export default Items;