import {Image} from '@components';
import React from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import usePreview from './hooks';

const Component = () => {
  const {
    props: {imageUrl},
    actions: {close},
  } = usePreview();

  return (
    <Screen testID="PreviewScreen">
      <Image imageUrl={imageUrl} />
      <Footer>
        <Button mode="contained" onPress={close}>
          BACK
        </Button>
      </Footer>
    </Screen>
  );
};

const PreviewScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = Component;
  static Options = PreviewScreenOptions;
}

const Screen = styled.SafeAreaView`
  flex: 1;
`;

const Footer = styled.View`
  margin: 16px 16px 16px 16px;
`;
