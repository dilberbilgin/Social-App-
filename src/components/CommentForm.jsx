import {
  Avatar,
  Button,
  CardContent,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { display } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CommentForm(props) {
  const { userId, username, postId } = props;
  const [text, setText] = useState("");

  const saveComment = async () => {
    try {
      await axios.post(
        `http://localhost:8081/api/v1/comments?postId=${postId}`,
        {
          postId: postId,
          userId: userId,
          commentText: text,
        }
      );
      // refreshPosts();
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const handleSubmit = () => {
    saveComment();
    setText("");
  };

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <CardContent
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        m: 2,
        maxWidth: { xs: 340, sm: 540, md: 720, lg: 960 },
      }}
    >
      {/* <Typography variant="body2" sx={{ color: "text.secondary" }}> */}
      <OutlinedInput
        id="outlined-adornment-amount"
        multiline
        inputProps={{ maxLength: 250 }}
        fullWidth
        // value={commentText} burada kendimiz yazabilmeliyiz
        onChange={(i) => handleChange(i.target.value)}
        startAdornment={
          <InputAdornment position="start">
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
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Button
              sx={{
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                color: "white",
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Comment
            </Button>
          </InputAdornment>
        }
        value={text}
        sx={{
          color: "black",
          background: "white",
        }}
      ></OutlinedInput>
      {/* </Typography> */}
    </CardContent>
  );
}

export default CommentForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
// import { createComment } from "../API/comment"; // createComment import edildi

// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// const CommentForm = ({ postId, onCommentAdded }) => {
//   const [comment, setComment] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!comment) return;

//     setIsLoading(true);
//     try {
//       await createComment({
//         userId: 2, // userId alanı, gerçek kullanıcı ID'si ile değiştirin
//         postId,
//         commentText: comment,
//       });
//       setComment("");
//       setSuccessMessage("Yorum başarıyla eklendi!");
//       if (onCommentAdded) onCommentAdded(); // Yeni yorum eklendikten sonra tetikleme
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       setErrorMessage("Yorum eklenirken bir hata oluştu.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setComment(e.target.value);
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
//       <TextField
//         fullWidth
//         label="Yorumunuz"
//         variant="outlined"
//         multiline
//         rows={4}
//         value={comment}
//         onChange={handleChange}
//         sx={{ mb: 2 }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         type="submit"
//         disabled={isLoading}
//       >
//         {isLoading ? "Yükleniyor..." : "Yorum Ekle"}
//       </Button>

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

// export default CommentForm;
