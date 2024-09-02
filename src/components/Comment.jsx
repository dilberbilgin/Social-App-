// import { InputAdornment } from "@mui/material";
// import React from "react";

// function Comment(props) {
//   const { text, userId, username } = props;

//   return (
//     <CardContent>
//       <Typography variant="body2" sx={{ color: "text.secondary" }}>
//         <OutlinedInput
//           disabled
//           id="outlined-adornment-amount"
//           multiline
//           inputProps={{ maxLength: 25 }}
//           fullWidth
//           value={text}
//           startAdornment={
//             <InputAdornment position="start">
//               <Link to={`/users/${userId}`} style={{ textDecoration: "none" }}>
//               <Avatar
//                 sx={{
//                   background:
//                     "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
//                   color: "white",
//                 }}
//                 aria-label="recipe"
//               >
//                 {username.charAt(0).toUpperCase()}
//               </Avatar>
//             </Link>
//             </InputAdornment>

//           }
//           sx={{
//           color: "black",
//           background: "white",
//         }}
//         ></OutlinedInput>
//         {postText}
//       </Typography>
//     </CardContent>
//   );
// }

// export default Comment;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Avatar,
//   IconButton,
//   Collapse,
//   List,
//   ListItem,
//   Divider,
// } from "@mui/material";
// import CommentForm from "./CommentForm";
// import { getCommentsByPostId } from "../API/comment"; // Yorumları almak için eklenen fonksiyon

// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// const Comment = ({ postId }) => {
//   const [comments, setComments] = useState([]);
//   const [showComments, setShowComments] = useState(false);

//   useEffect(() => {
//     // Post ID'sine göre yorumları al
//     const fetchComments = async () => {
//       try {
//         const response = await getCommentsByPostId(postId);
//         setComments(response);
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };

//     fetchComments();
//   }, [postId]);

//   const handleCommentAdded = () => {
//     // Yeni yorum eklendikten sonra yorumları yeniden al
//     const fetchComments = async () => {
//       try {
//         const response = await getCommentsByPostId(postId);
//         setComments(response);
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };

//     fetchComments();
//   };

//   return (
//     <Box sx={{ mt: 2 }}>
//       <IconButton onClick={() => setShowComments((prev) => !prev)}>
//         {/* İkonu buraya ekleyebilirsiniz */}
//         {showComments ? "Collapse" : "Expand"}
//       </IconButton>
//       <Collapse in={showComments}>
//         <Box sx={{ mt: 2 }}>
//           <CommentForm postId={postId} onCommentAdded={handleCommentAdded} />
//           <List>
//             {comments.map((comment) => (
//               <React.Fragment key={comment.id}>
//                 <ListItem>
//                   <Avatar sx={{ mr: 2 }}>U</Avatar>
//                   <Box>
//                     <Typography variant="subtitle2">
//                       {comment.username}
//                     </Typography>
//                     <Typography variant="body2">
//                       {comment.commentText}
//                     </Typography>
//                   </Box>
//                 </ListItem>
//                 <Divider />
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Collapse>
//     </Box>
//   );
// };

// export default Comment;
