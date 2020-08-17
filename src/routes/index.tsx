import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Comics } from '../pages/Comics';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="ComicsScreen" component={Comics} />
    </AppStack.Navigator>
  );
};

export { Routes };
