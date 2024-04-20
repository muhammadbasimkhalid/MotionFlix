import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";

import useApi from "../../../src/hooks/useApi";
import {
  ExploreStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
} from "../../../src/types/navigation";
import CastList from "../../../src/components/full-cast-screen/CastList";
import COLORS from "../../../src/constants/colors";
import SkeletonFullCast from "../../../src/components/UI/Skeleton/SkeletonFullCast";
import FetchingError from "../../../src/components/UI/FetchingError";

type Props = any

const FullCastScreen = ({ route }: Props) => {
  const id = route.params.id;
  const { data: cast, isLoading, error } = useApi("fetchMovieCast", id);

  if (isLoading) {
    return <SkeletonFullCast />
  }

  if (error) {
    return <FetchingError />
  }

  return (
    <Container>
      <CastList data={cast} />
    </Container>
  );
};

export default FullCastScreen;

const Container = styled.View`
  flex: 1;
  padding: 0 12px;
  margin-bottom: 8px;
`;