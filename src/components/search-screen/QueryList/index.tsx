import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ThreeColumnList from "../../../../src/components/UI/ThreeColumnList";
import useApi from "../../../../src/hooks/useApi";
import { ExploreStackParamList } from "../../../../src/types/navigation";
import { ActivityIndicator } from "react-native-paper";
import FetchingError from "../../../../src/components/UI/FetchingError";

interface QueryListProps {
  query: string;
}

type NavigationType = NativeStackNavigationProp<ExploreStackParamList>;

const QueryList = ({ query }: QueryListProps) => {
  const { data: movies, isLoading, error } = useApi("fetchMoviesByQuery", query);
  const navigation = useNavigation<NavigationType>();

  const itemPressHandler = (id: number) => {
    navigation.navigate("MovieDetail", { id: id });
  };

  if (isLoading) {
    return <ActivityIndicator color={"white"} style={{marginTop:100}} size={"large"} />;
  }

  if (error) {
    return <FetchingError />
  }

  return <ThreeColumnList data={movies} onItemPress={itemPressHandler} />;
};

export default QueryList