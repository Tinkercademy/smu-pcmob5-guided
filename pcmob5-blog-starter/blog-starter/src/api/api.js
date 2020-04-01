import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import axios from "axios";
import { navigate } from "../navigationRef";

class api extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
}

_bootstrapAsync = async () => {
  const userToken = await AsyncStorage.getItem(res.access_token);
};

export const Signup = async (username, password) => {
  // code Signup stuff here
};

export const Signin = async ({ username, password }) => {
  // code Signin stuff here
};

export const signout = async () => {
  // code Signout stuff here
};
