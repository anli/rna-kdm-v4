import Navigation from '@navigation';
import {persisted, store} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const theme = {
  ...DefaultTheme,
  dark: true,
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persisted.persistor}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};
export default App;
