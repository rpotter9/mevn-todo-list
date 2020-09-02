import axios from 'axios';

const config = {
  baseURL: 'http://localhost:3000/api'
};

const httpClient = axios.create(config);


export default httpClient