import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ShowdownScreen} from '@screens';
import React from 'react';
import 'react-native-gesture-handler';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer theme={theme}>
        <Tabs />
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
