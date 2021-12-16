import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

import Post from "./Post";
import { postsState$ } from "../../redux/selectors";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom component="div">
        Blog đánh giá
        <BookRoundedIcon />
      </Typography>
      <Grid container spacing={2} alignItems="stretch">
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
