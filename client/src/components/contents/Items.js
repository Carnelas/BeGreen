//este lo añade al back
//servicio de rutas

import axios from 'axios';

class Items {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/private',
      withCredentials: true
    });
  }
  item = (itemName, seller, price, qty) => {
    return this.service.post('/item', { itemName, seller, price, qty })
      .then(response => response.data)
  }
  showItems = () => {
    return this.service.get('/item')
      .then(response => {
        return response.data
      })
  }
}
export default Items;