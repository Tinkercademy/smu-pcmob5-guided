import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";

const editBlogPost = async (posts, editPosts) => {
  // code editblogpost here
};

const EditScreen = ({ navigation }) => {
  console.log(navigation);
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
        console.log(title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default EditScreen;
