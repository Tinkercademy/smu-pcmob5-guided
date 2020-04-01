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
  // code getblogposts here
};

const addBlogPost = async post => {
  // code addblogpost here
};

const deleteBlogPost = async (postID, posts, setPosts) => {
  // code deleteblogpost here
};

const editBlogPost = async (posts, editPosts) => {
  // code editblogpost here
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
