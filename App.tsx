import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PreviewScreen, ShowdownScreen} from '@screens';
import {store} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as StoreProvider} from 'react-redux';

const theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: PaperDefaultTheme.colors.background,
  },
};

const Stack = createStackNavigator();
const ShowdownTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ShowdownScreen"
      component={ShowdownScreen.Component}
      options={ShowdownScreen.Options}
    />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="ShowdownTab" labeled={false}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="google-downasaur" color={color} size={24} />
          ),
        }}
        name="ShowdownTab"
        component={ShowdownTab}
      />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer theme={theme}>
          <RootStack.Navigator mode="modal">
            <RootStack.Screen
              name="Main"
              component={Tabs}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="PreviewScreen"
              component={PreviewScreen.Component}
              options={PreviewScreen.Options}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};
export default App;
