const basePlaseholderUrl = 'https://jsonplaceholder.typicode.com'
const baseCarsUrl = 'http://owu.linkpc.net/carsAPI/v1'

const posts = '/posts'
const comments='/comments'
const alboms='/alboms'
const todos='/todos'
const users='/users'

const cars = '/cars'

const urlsPlaseholderApi = {
    posts,
    getByidPost: (id) => `${posts}/${id}`,
    comments,
    getByidComment: (id) => `${comments}/${id}`,
    users,
    getByIDUser(id){return `${users}/${id}`},
    alboms,
    todos,
}


const urlsCarsApi={
    cars,
    byIdCar: (id) => `${cars}/${id}`
}





export {
    basePlaseholderUrl,
    baseCarsUrl,
    urlsCarsApi,
    urlsPlaseholderApi
}