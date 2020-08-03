import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type ScreenRouteProp = RouteProp<
  {PreviewScreen: {imageUrl: string}},
  'PreviewScreen'
>;

const usePreview = () => {
  const {goBack, canGoBack} = useNavigation();
  const route = useRoute<ScreenRouteProp>();

  const props = {
    imageUrl: route.params.imageUrl,
  };

  const actions = {
    close: () => canGoBack() && goBack(),
  };

  return {props, actions};
};

export default usePreview;
