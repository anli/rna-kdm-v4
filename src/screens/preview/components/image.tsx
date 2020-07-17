import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {ActivityIndicator} from 'react-native-paper';
import styled from 'styled-components/native';

const Loading = styled(ActivityIndicator)`
  flex: 1;
`;

const Image = ({imageUrl}: {imageUrl: string}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <ImageStyled
      source={{
        uri: imageUrl,
      }}
      onLoadStart={() => setIsLoading(true)}
      onLoad={() => setIsLoading(false)}
      resizeMode={FastImage.resizeMode.contain}>
      <Loading hidesWhenStopped animating={isLoading} size="large" />
    </ImageStyled>
  );
};

export default Image;

const ImageStyled = styled(FastImage)`
  flex: 1;
`;
