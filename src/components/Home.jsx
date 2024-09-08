import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { Box, Container } from "@mui/system";
import PostForm from "./PostForm";
import { getPosts } from "../API/post";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  // const refreshPosts = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:8081/api/v1/posts");
  //     setIsLoaded(true);
  //     if (Array.isArray(data)) {
  //       setPostList(data);
  //     } else {
  //       console.error("Expected an array but received:", data);
  //       setPostList([]); // Set an empty array if the data is not an array
  //     }

  //     // setPostList(data);
  //     console.log(data);
  //   } catch (error) {
  //     setIsLoaded(true);
  //     setError(error);
  //   }
  // };

  // const refreshPosts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8081/api/v1/posts");
  //     setIsLoaded(true);
  //     setPostList(response.data.data);
  //   } catch (error) {
  //     setIsLoaded(true);
  //     setError(error);
  //   }
  // };

  const refreshPosts = async () => {
    try {
      const { data } = await getPosts();
      setIsLoaded(true);
      setPostList(data);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    refreshPosts();
  }, [postList]);

  if (error) {
    return <div>Error!!!</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else
    return (
      // <Container>
      <Box
        sx={{
          bgcolor: "#f0f5ff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <PostForm userId={2} username={"ddd"} refreshPosts={refreshPosts} />
        {postList.map((post) => (
          <Post
            likes={post.likes}
            postId={post.id}
            userId={post.userId}
            username={post.username}
            title={post.title}
            postText={post.postText}
          />
        ))}
      </Box>
      // </Container>
    );
}

export default Home;
