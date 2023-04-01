import { API_URL } from "./api";
import { createPost } from "./createPost";

export const getDataPosts = (idPost) => {
    axios.get(`${API_URL}${idPost}`)
        .then((res) => createPost(res.data))
        .catch(() => {
            console.log(`Помилка отримання публікація поста ${idPost}`);
        });
}