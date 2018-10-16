import axios from 'axios';

class Restaurant {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3010/api/private',
            withCredentials: true
        });
    }

    signupRest = (name, phone, description, adress, owner) => {
        return this.service.post('/signupRest', { name, phone, description, adress, owner })
            .then(response => response.data)
    }
    showRestaurants = () => {
        return this.service.get('/restaurant')
          .then(response => {
            return response.data
          })
      }
      showRestaurantById = () => {
        return this.service.get('/restaurant/:_id')
          .then(response => {
            return response.data
          })
      } 
}

export default Restaurant;