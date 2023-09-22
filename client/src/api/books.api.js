import axios from 'axios'

const bookApi = axios.create({
    baseURL: "http://localhost:8000/books/api/v1/books/"
})

export const getAllBooks = () => {
    return bookApi.get('/')
}

export const getBookById = (id) => {
    return bookApi.get(`/${id}/`)
}

export const createBooks = (book) => {
    return bookApi.post('/', book)
}

export const deleteBooks = (id) => {
    return bookApi.delete(`/${id}`)
}

export const updateBooks = (id, book) => {
    return bookApi.put(`/${id}/`, book)
}