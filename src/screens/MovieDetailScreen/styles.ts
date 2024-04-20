import { Dimensions } from "react-native";
import styled from "styled-components/native";
import COLORS from "../../../src/constants/colors";

const PosterWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${(Dimensions.get("window").width * 4) / 3}px;
`;

const Poster = styled.Image`
  width: 100%;
  height: 100%;
`;

const DetailSection = styled.View`
  margin-top: 20px;
  padding: 0px 12px 12px;
  align-self: stretch;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25px;
  text-align: left;
`;

const Synopsis = styled.Text`
  color: gray;
  text-align: justify;
`;

const ReleaseInfoWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
  margin: 6px 0px;
`;

const ReleaseInfoText = styled.Text`
  color: white;
`;

const VoteWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const VoteText = styled.Text`
  color: white;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;

const InfoLabel = styled.Text`
  color: white;
  font-size: 15px;
`;

const InfoItem = styled.Text`
  color: gray;
  font-size: 15px;
`;

const ReleaseInfo = {
  Wrapper: ReleaseInfoWrapper,
  Text: ReleaseInfoText,
}

const Vote = {
  Wrapper: VoteWrapper,
  Text: VoteText,
}

const Info = {
  Wrapper: InfoWrapper,
  Label: InfoLabel,
  Item: InfoItem,
}


export {
  PosterWrapper,
  Poster,
  DetailSection,
  Title,
  Synopsis,
  Vote, 
  ReleaseInfo,
  Info,
};
