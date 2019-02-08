import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1317ba96e7b69cc2b30200a063bfb2b6b0018b52c95f4867639c887cc62049bb'
      }
});