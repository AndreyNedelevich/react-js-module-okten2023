import axios from "axios";

export default class PostService {
    static async getAll(api) {
        return await axios.get(
            api);
    }
    static async getPostsById(userId) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        return response;
    }
    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}
