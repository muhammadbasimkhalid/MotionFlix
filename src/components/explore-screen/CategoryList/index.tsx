import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ThreeColumnList from "../../../../src/components/UI/ThreeColumnList";
import useApi from "../../../../src/hooks/useApi";
import { ExploreStackParamList } from "../../../../src/types/navigation";
import SkeletonListExplore from "../../../../src/components/UI/Skeleton/SkeletonListExplore";

interface CategoryListProps {
  genreId: number;
}

type NavigationType = NativeStackNavigationProp<ExploreStackParamList>;

const CategoryList = ({ genreId }: CategoryListProps) => {
  const { data: movies, isLoading: loadingMovies } = useApi(
    "fetchMoviesByGenre",
    genreId
  );
  const navigation = useNavigation<NavigationType>();

  const itemPressHandler = (id: number) => {
    navigation.navigate("MovieDetail", { id: id });
  };

  if (loadingMovies) {
    return <SkeletonListExplore />;
  }

  return <ThreeColumnList data={movies} onItemPress={itemPressHandler} />;
};

export default CategoryList;
