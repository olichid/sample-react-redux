import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 34f36e6f030653f70eb90fa5c11119e8b683688ba74c9f2382a25540698754fa'
    }
});