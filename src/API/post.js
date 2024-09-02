import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getPosts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/posts`);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPostsByUserId = async (userId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/posts`, {
      params: { userId },
    });
    return data;
  } catch (error) {
    console.error(`Error fetching post with user ${userId}:`, error);
    throw error;
  }
};

export const getPostById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/posts/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/v1/posts`, post);
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const updatePost = async (id, post) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/api/v1/posts/${id}`, post);
    return data;
  } catch (error) {
    console.error(`Error updating post with id ${id}:`, error);
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/api/v1/posts/${id}`);
    return data;
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
    throw error;
  }
};

// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// export const getPosts = async () => {
//   const { data } = await axios.get(`${BASE_URL}/api/v1/posts`);
//   return data;
// };

// export const getPostById = async (id) => {
//   const { data } = await axios.get(`${BASE_URL}/api/v1/posts/${id}`);
//   return data;
// };

// export const createPost = async (post) => {
//   const { data } = await axios.post(`${BASE_URL}/api/v1/posts`, post);
//   return data;
// };

// export const updatePost = async (id, post) => {
//   const { data } = await axios.put(`${BASE_URL}/api/v1/posts/${id}`, post);
//   return data;
// };

// export const deletePost = async (id) => {
//   const { data } = await axios.delete(`${BASE_URL}/api/v1/posts/${id}`);
//   return data;
// };

// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// export const getPosts = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/api/v1/posts`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     throw error; // Hataları üst seviye işleme kısımlarında ele almak için fırlatılır
//   }
// };

// export const getPostById = async (id) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/api/v1/posts/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching post with id ${id}:`, error);
//     throw error;
//   }
// };

// export const createPost = async (post) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/api/v1/posts`, post);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating post:", error);
//     throw error;
//   }
// };

// export const updatePost = async (id, post) => {
//   try {
//     const response = await axios.put(`${BASE_URL}/api/v1/posts/${id}`, post);
//     return response.data;
//   } catch (error) {
//     console.error(`Error updating post with id ${id}:`, error);
//     throw error;
//   }
// };

// export const deletePost = async (id) => {
//   try {
//     const response = await axios.delete(`${BASE_URL}/api/v1/posts/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error deleting post with id ${id}:`, error);
//     throw error;
//   }
// };
