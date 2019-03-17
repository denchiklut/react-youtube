import axios from 'axios'
const KEY = 'AIzaSyA0QSs-P93EzB47A8d-i0xsy7XbXPvcf4k'
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: KEY,
        maxResults: '25',
        part: 'snippet'
    }

})