import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EncounterSelectScreen, PreviewScreen, ShowdownScreen} from '@screens';
import {ShowdownSelectors} from '@showdown';
import {RootState} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: PaperDefaultTheme.colors.background,
  },
};

const Stack = createStackNavigator();
const ShowdownTab = () => {
  const state = useSelector<RootState, RootState>((res) => res);
  const hasEncounter = ShowdownSelectors.getHasEncounter(state);

  if (hasEncounter) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ShowdownScreen"
          component={ShowdownScreen.Component}
          options={ShowdownScreen.Options}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EncounterSelectScreen"
        component={EncounterSelectScreen.Component}
        options={EncounterSelectScreen.Options}
      />
    </Stack.Navigator>
  );
};

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

const Navigation = () => (
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
);

export default Navigation;
