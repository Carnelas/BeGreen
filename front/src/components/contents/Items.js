//este lo trae desde el back, por eso importa axios

import axios from 'axios';

class Items {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/itemCreate',
      withCredentials: true
    });
  }

  add = (itemName, seller, price, qty) => {
    return this.service.post('/add', {itemName, seller, price, qty})
    .then(response => response.data)
  }







}
export default Items;