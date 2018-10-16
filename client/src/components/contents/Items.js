
import axios from 'axios';

class Items {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/private',
      withCredentials: true
    });
  }
  item = (itemName, sellerId, price, qty) => {
    return this.service.post('/item', { itemName, sellerId, price, qty })
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