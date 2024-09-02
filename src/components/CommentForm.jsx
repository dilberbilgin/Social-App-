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
