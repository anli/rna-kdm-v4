import React from 'react';
import {
  Card as CardNative,
  IconButton as IconButtonNative,
} from 'react-native-paper';
import styled from 'styled-components/native';

interface Props {
  data: {name: string};
  onPress: () => any;
  onLongPress?: () => any;
  selected?: boolean;
}
const Card = ({data, onPress, onLongPress, selected = false}: Props) => (
  <Wrapper>
    <PaperCard onPress={onPress} onLongPress={onLongPress}>
      <PaperCard.Title
        title=""
        subtitle={data?.name}
        right={(itemProps: any) =>
          selected && <IconButton {...itemProps} icon="check-circle" />
        }
      />
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

const IconButton = styled(IconButtonNative)`
  margin-right: -16px;
`;
