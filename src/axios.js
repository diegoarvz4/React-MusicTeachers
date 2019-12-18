import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://fathomless-headland-51075.herokuapp.com/'
})

export default instance