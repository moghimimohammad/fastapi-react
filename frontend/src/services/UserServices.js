import axios from 'axios'
const baseUrl = 'http://localhost:8081/user'

const getUser = (id) => {
    console.log('id:', id);
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(
        response => response.data
    )
}

export default { getUser }