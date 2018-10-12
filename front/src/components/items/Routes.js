import axios from 'axios';



class Routes {
    constructor() {
      this.service = axios.create({
        baseURL: 'http://localhost:3010/api/routes',
        withCredentials: true
      });
    }

    addItem = (itemName, seller, price, qty) => {
        return this.service.post('/add', {itemName, seller, price, qty})
        .then(response => response.data)
      }

} 