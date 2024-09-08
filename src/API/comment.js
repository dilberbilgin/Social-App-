// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// export const getComments = async () => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/api/v1/comments`, {
//       params: { postId },
//     });

//     return data;
//   } catch (error) {
//     console.error("Error fetching comments:", error);
//     throw error;
//   }
// };

// export const getCommentsByPostId = async (postId) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/api/v1/comments`, {
//       params: { postId },
//     });
//     return data;
//   } catch (error) {
//     console.error("Error fetching comments:", error);
//     throw error;
//   }
// };

// export const getCommentsByPostId = async (postId) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/comments?postId=${postId}`);
//     return data;
//   } catch (error) {
//     console.error("Error fetching comments:", error);
//     throw error;
//   }
// };

// // Belirli bir yorum id'sine göre yorum alma
// export const getCommentById = async (id) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/api/v1/comments/${id}`);
//     return data;
//   } catch (error) {
//     console.error(`Error fetching comment with id ${id}:`, error);
//     throw error;
//   }
// };

// // Belirli bir gönderiye ait yorumları alma
// export const getCommentsByPostId = async (postId) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
//     return data;
//   } catch (error) {
//     console.error(`Error fetching comments for post with id ${postId}:`, error);
//     throw error;
//   }
// };

// // Yeni bir yorum oluşturma
// export const createComment = async (comment) => {
//   try {
//     const { data } = await axios.post(`${BASE_URL}/api/v1/comments`, comment);
//     return data;
//   } catch (error) {
//     console.error("Error creating comment:", error);
//     throw error;
//   }
// };

// // Bir yorumu güncelleme
// export const updateComment = async (id, comment) => {
//   try {
//     const { data } = await axios.put(
//       `${BASE_URL}/api/v1/comments/${id}`,
//       comment
//     );
//     return data;
//   } catch (error) {
//     console.error(`Error updating comment with id ${id}:`, error);
//     throw error;
//   }
// };

// // Bir yorumu silme
// export const deleteComment = async (id) => {
//   try {
//     await axios.delete(`${BASE_URL}/api/v1/comments/${id}`);
//   } catch (error) {
//     console.error(`Error deleting comment with id ${id}:`, error);
//     throw error;
//   }
// };
