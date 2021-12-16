import React from "react";
import Header from "../components/Header/header";
import ViewList from "../components/ViewLists/index";
import PostList from "../components/PostList/index";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import CreatePostModal from "../components/CreatePostModal";
import { Container, Fab } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import Search from "../components/Search/search";

export default function HomePage(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <Search />
      <ViewList />
      <PostList />
      <CreatePostModal />
      <Fab
        color="secondary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
