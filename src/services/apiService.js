import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiService = {
    fetchUsers: () => axios.get(`${API_BASE_URL}/users`),
    fetchUserPosts: (userId) => axios.get(`${API_BASE_URL}/posts`, { params: { userId } }),
    fetchUserAlbums: (userId) => axios.get(`${API_BASE_URL}/albums`, { params: { userId } }),
    fetchPostComments: (postId) => axios.get(`${API_BASE_URL}/posts/${postId}/comments`),
    fetchAlbumPhotos: (albumId) => axios.get(`${API_BASE_URL}/albums/${albumId}/photos`),
    fetchPost: (postId) => axios.get(`${API_BASE_URL}/posts/${postId}`),
    createPost: (data) => axios.post(`${API_BASE_URL}/posts`, data),
    updatePost: (postId, data) => axios.put(`${API_BASE_URL}/posts/${postId}`, data),
    patchPost: (postId, data) => axios.patch(`${API_BASE_URL}/posts/${postId}`, data),
    deletePost: (postId) => axios.delete(`${API_BASE_URL}/posts/${postId}`),
    // Пример запроса для поиска пользователей по username (поиск и фильтрация)
    searchUsersByUsername: (username) => axios.get(`${API_BASE_URL}/users`, { params: { username } }),
};

export default apiService;