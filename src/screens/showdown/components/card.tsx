import React from 'react';
import {Card as CardNative} from 'react-native-paper';
import styled from 'styled-components/native';

interface Props {
  data: {name: string};
  onPress: () => any;
}
const Card = ({data, onPress}: Props) => (
  <Wrapper>
    <PaperCard onPress={onPress}>
      <PaperCard.Title title="" subtitle={data?.name} />
    </PaperCard>
  </Wrapper>
);

export default Card;

const Wrapper = styled.View`
  margin-right: 8px;
`;

const PaperCard = styled(CardNative)`
  padding-right: 16px;
`;
