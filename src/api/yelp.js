import axios from 'axios';
import Keys from "../../Keys";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer ' + Keys.yelp,
  }
})