import react, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  InputAdornment,
  OutlinedInput,
  Snackbar,
} from "@mui/material";

function PostForm(props) {
  // bu sekilde de yazilabili function Post({ userId, username, title, postText }) { return...}
  const { userId, username, refreshPosts } = props;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);

  const savePost = async () => {
    try {
      await axios.post("http://localhost:8081/api/v1/posts", {
        title: title,
        userId: userId,
        postText: text,
      });
      // refreshPosts();
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const handleSubmit = () => {
    savePost();
    setIsSent(true);
    setTitle("");
    setText("");
    refreshPosts();
  };

  const handleTitle = (value) => {
    setTitle(value);
    setIsSent(false);
  };

  const handleText = (value) => {
    setText(value);
    setIsSent(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSent(false);
  };

  return (
    <div>
      <Snackbar open={isSent} autoHideDuration={1200} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your post is sent!
        </Alert>
      </Snackbar>
      <Card
        sx={{
          width: 800,
          m: 2,
          maxWidth: { xs: 340, sm: 540, md: 720, lg: 960 },
        }}
      >
        <CardHeader
          avatar={
            <Link to={`/users/${userId}`} style={{ textDecoration: "none" }}>
              <Avatar
                sx={{
                  background:
                    "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  color: "white",
                }}
                aria-label="recipe"
              >
                {username.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
          }
          title={
            <OutlinedInput
              id="outlined-adornment-amount"
              multiline
              placeholder="Title"
              inputProps={{ maxLength: 25 }}
              fullWidth
              value={title}
              onChange={(i) => handleTitle(i.target.value)}
            ></OutlinedInput>
          }
          // subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <OutlinedInput
              id="outlined-adornment-amount"
              multiline
              placeholder="Text"
              inputProps={{ maxLength: 250 }}
              fullWidth
              value={text}
              onChange={(i) => handleText(i.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    sx={{
                      background:
                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                      color: "white",
                    }}
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Post
                  </Button>
                </InputAdornment>
              }
            ></OutlinedInput>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostForm;

// import React, { useState } from "react";
// import axios from "axios";
// import {
//   TextField,
//   Button,
//   Avatar,
//   Box,
//   Typography,
//   InputAdornment,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import { createPost } from "../API/post";

// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// const PostForm = () => {
//   const [post, setPost] = useState({
//     userId: 2, // userId alanı
//     title: "", // title alanı
//     postText: "", // postText alanı DTO ile uyumlu olmalı
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(""); // Başarı mesajı
//   const [errorMessage, setErrorMessage] = useState(""); // Hata mesajı

//   const handlePost = async () => {
//     if (!post.title || !post.postText) return; // Validation
//     setIsLoading(true);
//     try {
//       await createPost(post);
//       setPost({ userId: 2, title: "", postText: "" }); // Form alanlarını sıfırla
//       setSuccessMessage("Post başarıyla gönderildi!");
//     } catch (error) {
//       console.error("Error posting data:", error);
//       setErrorMessage("Post gönderilirken bir hata oluştu.");
//     } finally {
//       setIsLoading(false);
//     }
//     console.log(post);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPost((prevPost) => ({
//       ...prevPost,
//       [name]: value,
//     }));
//   };

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Box display="flex" alignItems="center" mb={2}>
//         <Avatar sx={{ mr: 2 }}>U</Avatar>
//         <Typography variant="h6">Title</Typography>
//       </Box>

//       <TextField
//         fullWidth
//         label="Başlık"
//         variant="outlined"
//         name="title"
//         value={post.title}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />

//       <TextField
//         fullWidth
//         label="İçerik"
//         variant="outlined"
//         multiline
//         rows={4}
//         name="postText"
//         value={post.postText}
//         onChange={handleChange}
//         sx={{
//           mb: 2,
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handlePost}
//                 disabled={isLoading}
//                 sx={{ ml: 1 }} // Optional: spacing between text field and button
//               >
//                 {isLoading ? "Gönderiliyor..." : "Post At"}
//               </Button>
//             </InputAdornment>
//           ),
//         }}
//       />

//       {/* Başarı veya hata mesajlarını göstermek için Snackbar */}
//       <Snackbar
//         open={!!successMessage}
//         autoHideDuration={6000}
//         onClose={() => setSuccessMessage("")}
//       >
//         <Alert onClose={() => setSuccessMessage("")} severity="success">
//           {successMessage}
//         </Alert>
//       </Snackbar>

//       <Snackbar
//         open={!!errorMessage}
//         autoHideDuration={6000}
//         onClose={() => setErrorMessage("")}
//       >
//         <Alert onClose={() => setErrorMessage("")} severity="error">
//           {errorMessage}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default PostForm;
