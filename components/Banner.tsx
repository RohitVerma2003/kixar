import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { width } = Dimensions.get("window");

const images = [
  require("../assets/images/banner.jpg"),
  require("../assets/images/banner.jpg"),
  require("../assets/images/banner.jpg"),
];

const Banner = () => {
  return (
    <SwiperFlatList
      showPagination
      paginationActiveColor="#41A67E"
      paginationDefaultColor="#ccc"
      paginationStyleItem={{
        width: 8,
        height: 8,
      }}
      data={images}
      renderItem={({ item }) => (
        <Image
          source={item}
          style={{
            width: width,
            height: 250,
          }}
          resizeMode="cover"
        />
      )}
    />
  );
};

export default Banner;

const styles = StyleSheet.create({});
