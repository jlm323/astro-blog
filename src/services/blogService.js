import axios from 'axios'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

const axiosBlog = () => axios.create({
    baseURL: 'http://localhost:8080/blog',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const index = () => {
    return axiosBlog().get('/index')
}

const add = (newBlog) => {
    return axiosBlog().post('/add', newBlog)
}

const remove = (blogId) => {
    console.log('removing blog post', blogId)
    return axiosBlog().delete(`/remove/${blogId}`)
}

const services = {
    index,
    add,
    remove
}

export default services