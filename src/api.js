import axios from 'axios';
const url = 'http://localhost:4000/';

export const getItems = () => {
    axios.get(url).then(res => res.data);
}