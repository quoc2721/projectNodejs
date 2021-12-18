import React from "react";
import View from "./Views/view.js";
import { Grid, Typography, Box } from "@material-ui/core";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { blogsState$ } from "../../redux/selectors";

export default function ViewList() {
  const dispatch = useDispatch();

  const blogs = useSelector(blogsState$);
  console.log("[ViewList - blogs]", blogs);

  React.useEffect(() => {
    dispatch(actions.getBlogs.getBlogsRequest());
  }, [dispatch]);

  return (
    <Box my={6}>
      <Typography variant="h4" gutterBottom component="div">
        Các công ty hàng đầu
        <ApartmentIcon />
      </Typography>
      <Grid container spacing={2} align="center">
        {blogs.map((blog) => (
          <Grid item sx={12} sm={4}>
            <View blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
