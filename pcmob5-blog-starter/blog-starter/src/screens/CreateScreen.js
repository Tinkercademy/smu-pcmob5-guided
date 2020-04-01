import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default class CreateScreen extends React.Component {
  state = {
    title: "",
    content: ""
  };

  componentDidMount() {
    // code stuff here
  }

  handleTitleUpdate = title => {
    // code to update title to reflect input
  };

  handleContentUpdate = content => {
    // code to update content to reflect input
  };

  updateBlogPost = async post => {
    // code updateblogpost here
  };

  getBlogPosts = async (posts, setPosts) => {
    // code getblogposts here
  };

  render() {
    return (
      <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
          style={styles.input}
          value={this.state.title}
          onChangeText={this.handleTitleUpdate}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          style={styles.input}
          value={this.state.content}
          onChangeText={this.handleContentUpdate}
        />
        <Button
          title="Save Blog Post"
          onPress={() => {
            this.updateBlogPost;
            this.getBlogPosts;
            this.props.navigation.navigate("Index");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  }
});
