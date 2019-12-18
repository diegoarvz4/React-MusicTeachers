import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fathomless-headland-51075.herokuapp.com/'
})

export default instance