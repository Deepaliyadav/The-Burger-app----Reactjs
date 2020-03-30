import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bur-ger.firebaseio.com/'
});

export default instance;