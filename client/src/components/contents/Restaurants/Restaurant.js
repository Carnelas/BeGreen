import axios from 'axios';

class Restaurant {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/private`,
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
      
      showRestaurantById = (id) => {
        return this.service.get(`/restaurant/${id}`)
          .then(response => {
            return response.data
          })
      } 
}



export default Restaurant;