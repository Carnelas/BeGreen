
import axios from 'axios';

class Items {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/api/private',
      withCredentials: true
    });
  }
  item = (itemName, sellerId, sellerName, price, qty) => {
    return this.service.post('/item', { itemName, sellerId, sellerName, price, qty })
      .then(response => response.data)
  }
  showItems = () => {
    return this.service.get('/item')
      .then(response => {
        return response.data
      })
  }

  showSellerItems = (id) => {
    console.log(id);
    return this.service.get(`/item/${id}`)
      .then(response => {
        return response.data
      })
  }
}
export default Items;