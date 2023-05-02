const basePlaceholderUrl = 'https://jsonplaceholder.typicode.com'
const baseCarsUrl = 'http://owu.linkpc.net/carsAPI/v1'

const posts = '/posts'
const comments='/comments'
const albums='/albums'
const todos='/todos'
const users='/users'
const cars = '/cars'

const urlsPlaceholderApi = {
    posts,
    getByidPost: (id) => `${posts}/${id}`,
    comments,
    getByidComment: (id) => `${comments}/${id}`,
    getCommentsByIdPost(id){return `${posts}/${id}${comments}`},
    users,
    getByIDUser(id){return `${users}/${id}`},
    getPostsByIdUser(id){return `${users}/${id}${posts}`},
    albums,
    todos,
}


const urlsCarsApi={
    cars,
    byIdCar: (id) => `${cars}/${id}`
}





export {
    basePlaceholderUrl,
    baseCarsUrl,
    urlsCarsApi,
    urlsPlaceholderApi
}