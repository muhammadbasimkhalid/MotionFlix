import HorizontalList from "../../../src/components/UI/HorizontalList";
import useApi from "../../../src/hooks/useApi";
import FetchingError from "../../../src/components/UI/FetchingError";
import HeroSection from "../../../src/components/home-screen/HeroSection";
import SkeletonHome from "../../../src/components/UI/Skeleton/SkeletonHome";
import { ScrollView, View } from "react-native";

type Props = any;

const HomeScreen = ({ navigation }: Props) => {
  const { data: trendingMovies, isLoading: loadingTrending } = useApi(
    "fetchTrendingMovies"
  );
  const { data: upcomingMovies, isLoading: loadingUpcoming } = useApi(
    "fetchUpcomingMovies"
  );
  const { data: popularMovies, isLoading: loadingPopular } =
    useApi("fetchPopularMovies");
  const { data: nowPlayingMovies, isLoading: loadingNowPlaying } = useApi(
    "fetchNowPlayingMovies"
  );

  const itemClickHandler = (id: number) => {
    navigation.navigate("MovieDetail", { id: id });
  };

  if (
    loadingTrending ||
    loadingUpcoming ||
    loadingPopular ||
    loadingNowPlaying
  ) {
    return <SkeletonHome />;
  }

  if (
    !trendingMovies ||
    !upcomingMovies ||
    !popularMovies ||
    !nowPlayingMovies
  ) {
    return <FetchingError />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeroSection onPress={itemClickHandler} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          paddingHorizontal: 12,
          paddingTop: 10,
          gap: 15,
        }}
      >
        <HorizontalList
          data={trendingMovies?.reverse()}
          label="Trending"
          itemClickHandler={itemClickHandler}
        />
        <HorizontalList
          data={nowPlayingMovies?.reverse()}
          label="Now Playing"
          itemClickHandler={itemClickHandler}
        />
        <HorizontalList
          data={upcomingMovies?.reverse()}
          label="Upcoming"
          itemClickHandler={itemClickHandler}
        />
        <HorizontalList
          data={popularMovies}
          label="Popular"
          itemClickHandler={itemClickHandler}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
