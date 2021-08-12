import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const ProductCard = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageView}>
        <Image
          source={{ uri: props.image }}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.price}>{props.price}</Text>
      {!props.inStock && <Text style={styles.notStock}>STOKTA TOK</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ECEFF1",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  imageView: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  image: { width: "100%", height: 200, borderRadius: 10 },
  title: { fontWeight: "bold", fontSize: 16 },
  price: { color: "#808080", fontWeight: "bold", fontSize: 14 },
  notStock: { color: "red", fontWeight: "bold", fontSize: 14 },
});

export default ProductCard;
