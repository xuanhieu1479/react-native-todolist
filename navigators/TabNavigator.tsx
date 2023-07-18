import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ROUTES } from '../constants';
import { ToDo, Settings } from '../screens';

const Tab = createBottomTabNavigator();

interface TabNavigatorProps {
  initialRouteName: string;
}

const TabNavigator = ({ initialRouteName }: TabNavigatorProps) => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={initialRouteName}>
    <Tab.Screen name={ROUTES.TO_DO} component={ToDo} />
    <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
  </Tab.Navigator>
);

export default TabNavigator;
