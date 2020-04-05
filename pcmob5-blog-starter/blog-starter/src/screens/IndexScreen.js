import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { navigate } from "../navigationRef";
import axios from "axios";

const getBlogPosts = async (posts, setPosts) => {
  try {
    const response = await axios.get(
      "https://pcmob4-blog-api.herokuapp.com/posts",
      posts,
      setPosts
    );
    setPosts(response.data);
    console.log("Posts:\n----");
    console.log(posts);
  } catch (err) {
    console.log("geterror");
  }
};

const addBlogPost = async post => {
  console.log("addBlogPost start");
  try {
    const response = await axios.post(
      "https://pcmob4-blog-api.herokuapp.com/create",
      post
    );
  } catch (err) {
    console.log(`Error on addBlogPost: ${JSON.stringify(err.response.data)}`);
  }
};

const deleteBlogPost = async (postID, posts, setPosts) => {
  try {
    const response = await axios.delete(
      "https://pcmob4-blog-api.herokuapp.com/post/<int:id>",
      { title, content }
    );
    posts = posts.filter(item => item.id !== postID);
  } catch (err) {}
};

const editBlogPost = async (posts, editPosts) => {
  try {
    await axios.put("https://pcmob4-blog-api.herokuapp.com/post/<int:id>", {
      title,
      content
    });
  } catch (err) {
    console.log(err);
  }
};

const IndexScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts(posts, setPosts);

    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts(posts, setPosts);
    });

    return () => {
      listener.remove();
    };
  }, [navigation, setPosts, posts]);

  // console.log(state);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              id={item.id}
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => deleteBlogPost(item.id, posts, setPosts)}
                >
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
