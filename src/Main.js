import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  SafeAreaView,
  Dimensions,
} from "react-native";

import { data } from "./data";
import ProductCard from "./ProductComponent/ProductCard";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const Main = () => {
  const [input, setInput] = React.useState("");

  return (
    <SafeAreaView style={styles.mainarea}>
      <View>
        <Text style={styles.mainText}> PATIKASTORE</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder={"Ara..."}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <FlatList
        style={styles.productList}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <ProductCard
              name={item.title}
              image={item.imgURL}
              price={item.price}
              inStock={item.inStock}
              id={item.id}
            />
          );
        }}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainarea: {
    flex: 1,
    alignSelf: "center",
  },
  mainText: {
    color: "#891289",
    fontSize: 32,
    fontWeight: "bold",
  },
  searchInput: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: width - 20,
    paddingHorizontal: 15,
    backgroundColor: "#ECEFF1",
  },
  productList: {
    width: width - 20,
  },
});

export default Main;
