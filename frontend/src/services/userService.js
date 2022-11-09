import axios from "axios";

const axiosUser = axios.create({
    baseURL: 'http://localhost:8080/users',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
})

const info = () => {
    return axiosUser.get('/info')
}

const services = {
    info
}

export default services