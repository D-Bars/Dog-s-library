import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const has_breeds = process.env.REACT_APP_HAS_BREEDS;

export default class PostService {
    static async getByLimit(limit = 10) {
        const response = await axios.get(`${apiUrl}?has_breeds=${has_breeds}&limit=${limit}`, {
            headers: {
                'x-api-key': apiKey,
            }
        });
        return response;
    }
}