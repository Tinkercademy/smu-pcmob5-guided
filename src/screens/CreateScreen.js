import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

// //function CreateScreen = ({navigation})
// function CreateScreen({ navigation, route }) {
//   // const { addBlogPost } = route.params; // destructuring
//   //ADD OPTIONS HERE

//   // type RootStackParamList = {
//   //   Index: props
//   // };

//   // type props = {
//   //   navigation: StackNavigationProp<RootStackParamList, "Index">,
//   //   route: RouteProp<RootStackParamList, "Index">
//   // };

//   //  const { addBlogPost } = route.params;
//   //  const {addBlogPost} = useRoute<IndexScreenRouteProp>();
//   const { addBlogPost } = useRoute().params ?? {};
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       title: value === "" ? "No title" : value
//     });
//   }, [navigation, value]);

//   //route undefined

//   return (
//     <BlogPostForm
//       onSubmit={(title, content) => {
//         console.log("run");
//         addBlogPost({ title, content });
//         navigation.navigate("Index");
//       }}
//     />
//   );
// }

// const CreateScreen = ({ onSubmit, initialValues }) => {
//   const [title, setTitle] = useState(initialValues.title);
//   const [content, setContent] = useState(initialValues.content);

export default class CreateScreen extends React.Component {
  state = {
    title: "",
    content: ""
  };

  componentDidMount() {
    this.updateBlogPost();
    this.getBlogPosts();
  }

  handleTitleUpdate = title => {
    this.setState({ title });
  };

  handleContentUpdate = content => {
    this.setState({ content });
  };

  updateBlogPost = async post => {
    console.log("updateBlogPost start");
    console.log(axios.defaults.headers.common["Authorization"]);
    try {
      const response = await axios.post(
        "https://pcmob4-blog-api.herokuapp.com/create",
        post
      );
    } catch (err) {
      console.log(
        `Error on updateBlogPost: ${JSON.stringify(err.response.data)}`
      );
    }
  };

  getBlogPosts = async (posts, setPosts) => {
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
      console.log(`Error: ${JSON.stringify(err)}`);
    }
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
          // onPress={() => (this.state.title, this.state.content)}
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

// CreateScreen.defaultProps = {
//   initialValues: {
//     title: "",
//     content: ""
//   }
// };

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
