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
import { Container } from "@mui/system";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import {
  getLikesForPost,
  getLikesForPostAndUser,
  getUserLikes,
} from "../API/like";

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
  ],
}));

function Post(props) {
  const { userId, postId, username, title, postText, likes } = props;
  const [expanded, setExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const isInitialMount = useRef(true); // ilk kez mi load ediliyor. yoksa biri commenti tiklayip mi acti
  const [likeCount, setLikeCount] = useState(likes.length);
  const [likeId, setLikeId] = useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    refreshComments();
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      saveLike(postId, userId);
      setLikeCount(likeCount + 1);
    } else {
      deleteLike(likeId);
      setLikeCount(likeCount - 1);
    }
  };

  const refreshComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v1/comments?postId=${postId}`
      );
      setCommentList(response.data.data);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  const saveLike = async (postId, userId) => {
    const { data } = await axios.post("http://localhost:8081/api/v1/likes", {
      userId,
      postId,
    });
    return data;
  };

  const deleteLike = async (likeId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8081/api/v1/likes/${likeId}`
      );
      return data.data;
    } catch (error) {
      console.error("Error deleting like:", error);
      throw error;
    }
  };

  const checkLikes = async () => {
    const likes = await getLikesForPostAndUser(postId, userId);
    const likeControl = likes.find((like) => like.userId === userId);
    if (likeControl) {
      setLikeId(likeControl.id); // Eğer post daha önce beğenilmişse
      setIsLiked(true); // Kırmızı like butonu
    }
    //   if (likeControl != null) setLikeId(likeControl.id);
    //   setIsLiked(true);
  };

  // const checkLikes = async () => {
  //   try {
  //     const userLikes = await getLikesForPostAndUser(postId, userId);
  //     const likedPost = userLikes.find((like) => like.postId === postId);
  //     setIsLiked(!!likedPost);
  //   } catch (error) {
  //     console.error("Error checking user likes:", error);
  //   }
  // };

  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false;
    else refreshComments();
  }, [commentList]);

  useEffect(() => {
    checkLikes();
  }, []);

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
            <FavoriteIcon style={isLiked ? { color: "red" } : null} />
          </IconButton>
          {likeCount}

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
          <Container fixed>
            {error
              ? "error"
              : isLoaded
              ? commentList.map((comment) => (
                  <Comment
                    userId={2}
                    username={"USER"}
                    commentText={comment.commentText}
                  ></Comment>
                ))
              : "Loading"}
          </Container>
          <CommentForm
            userId={2}
            username={"USER"}
            postId={postId}
          ></CommentForm>
        </Collapse>
      </Card>
    </div>
  );
}

export default Post;
