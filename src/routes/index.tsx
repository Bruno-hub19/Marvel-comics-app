import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Description } from '../pages/Onboarding/Description';
import { FindHero } from '../pages/Onboarding/FindHero';
import { Comics } from '../pages/Comics';

const TopTab = createMaterialTopTabNavigator();
const AppStack = createStackNavigator();

const OnboardingScreens: React.FC = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        showIcon: false,
        showLabel: false,
        tabStyle: {
          backgroundColor: '#282828',
        },
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
        },
      }}
      springVelocityScale={0.2}
      swipeVelocityImpact={0.1}
    >
      <TopTab.Screen name="Description" component={Description} />
      <TopTab.Screen name="FindHero" component={FindHero} />
    </TopTab.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AppStack.Screen
        name="Onboarding"
        component={OnboardingScreens}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="ComicsScreen"
        component={Comics}
        options={{
          headerTitle: '',
          headerTintColor: '#fffde4',
          headerTransparent: true,
          headerStyle: { borderBottomWidth: 0 },
        }}
      />
    </AppStack.Navigator>
  );
};

export { Routes };
