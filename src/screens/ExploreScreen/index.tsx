import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import useApi from "../../../src/hooks/useApi";
import { Genre } from "../../../src/types/api";
import CategoryModal from "../../../src/components/explore-screen/CategoryModal";
import CategoryList from "../../../src/components/explore-screen/CategoryList";
import FetchingError from "../../../src/components/UI/FetchingError";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = any;

const ExploreScreen = ({ navigation, route }: Props) => {
  const [category, setCategory] = useState({ id: 28, name: "Action" });
  const { data: genres, error } = useApi("fetchCategories");
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  useEffect(() => {
    if (genres && genres.length > 0) setCategory(genres[0]);
  }, [genres]);

  const categoryItemPressHandler = (item: Genre) => {
    setCategory(item);
    setCategoryModalVisible(false);
  };

  useEffect(() => {
    if (route.params?.id && route.params?.name) {
      setCategory(route.params);
    }
  }, [route.params]);

  if (error) {
    return <FetchingError />;
  }

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 12,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 3,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          {category?.name} Movies
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={{ marginTop: 10 }}
          >
            <Feather name="search" size={24} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCategoryModalVisible(true)}
            style={{ marginTop: 10 }}
          >
            <MaterialCommunityIcons
              name="tune-vertical-variant"
              size={24}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <CategoryList genreId={category.id} />

      <CategoryModal
        visible={categoryModalVisible}
        onDismiss={() => setCategoryModalVisible(false)}
        onItemPress={categoryItemPressHandler}
      />
    </SafeAreaView>
  );
};

export default ExploreScreen;
