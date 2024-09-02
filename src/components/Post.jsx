import React from "react";
import react, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      // props: ({ expand }) => !!expand,
      // style: {
      //   transform: "rotate(180deg)",
      // },
    },
  ],
}));

function Post(props) {
  const { userId, username, title, postText, postId } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const isInitialMounth = useRef(true); // ilk kez mi load ediliyor. yoksa biri commenti tiklayip mi acti

  const handleExpandClick = () => {
    setExpanded(!expanded);
    refreshComments();
    console.log(commentList);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const refreshComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v1/comments?postId=${postId}`
      );
      setIsLoaded(true);
      setCommentList(response.data.data);

      setIsLoaded(true);
      setError(error);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    if (isInitialMounth.current) isInitialMounth.current = false;
    else refreshComments();
  }, [commentList]);

  return (
    <div>
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
          title={title}
          // subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {postText}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleLike} aria-label="add to favorites">
            <FavoriteIcon style={liked ? { color: "red" } : null} />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <CommentIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {/* <Typography sx={{ marginBottom: 2 }}>Method:</Typography> */}
            {/* {title} */}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default Post;

// import React from "react";
// import { Container, Typography } from "@mui/material";
// import PostForm from "./PostForm"; // Import the form component

// const Post = () => {
//   return (
//     <Container maxWidth="sm">
//       {/* <Typography
//         variant="h6"
//         gutterBottom
//         sx={{
//           maxWidth: "sm",
//           m: 2,
//           p: 2,
//           background: "lightGray",
//           color: "black",
//         }}
//       >
//         Gönderi Oluştur
//       </Typography> */}
//       <PostForm /> {/* Include the form component */}
//     </Container>
//   );
// };

// export default Post;
