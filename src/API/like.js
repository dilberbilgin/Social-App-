import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getLikesForPostAndUser = async (postId, userId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/v1/likes?postId=${postId}&userId=${userId}`
    );
    return data.data; // RestResponse içinde data kısmı.
  } catch (error) {
    console.error("Error fetching likes for post and user:", error);
    throw error;
  }
};

export const getLikesForPost = async (postId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/v1/likes?postId=${postId}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching likes:", error);
    throw error;
  }
};

//       `http://localhost:8081/api/v1/likes/user/${userId}`

export const getUserLikes = async (userId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/likes/user/${userId}`);
    return data.data; //İlk data, API yanıtının ana objesidir ({ status, data }).İkinci data, bu yanıtın içindeki verilerin bulunduğu kısımdır.
  } catch (error) {
    console.error("Error fetching user likes:", error);
    throw error;
  }
};

// export const createLike = async (like) => {
//   try {
//     const { data } = await axios.post(`${BASE_URL}/api/v1/likes`, like);
//     return data;
//   } catch (error) {
//     console.error("Error creating likes:", error);
//     throw error;
//   }
// };

// export const deleteLike = async (likeId) => {
//   try {
//     const { data } = await axios.delete(`${BASE_URL}/api/v1/likes/${likeId}`);
//     return data;
//   } catch (error) {
//     console.error(`Error deleting like with likeId ${likeId}:`, error);
//     throw error;
//   }
// };
