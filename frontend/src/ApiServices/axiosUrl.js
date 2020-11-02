import axios from 'axios';

const instance = axios.create(
    {
        baseURL: "https://theflowapp.herokuapp.com/"
    }
);

export default instance;