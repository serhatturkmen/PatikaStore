import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Main from "./src/Main";

export default function App() {
  return (
    <>
      <View style={styles.container} />
      <Main />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
  },
});
