import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ROUTES } from 'constants/index';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const renderToDoComponent = () => (
    <TabNavigator initialRouteName={ROUTES.TO_DO} />
  );
  const renderSettingsComponent = () => (
    <TabNavigator initialRouteName={ROUTES.SETTINGS} />
  );

  return (
    <Drawer.Navigator initialRouteName={ROUTES.TO_DO}>
      <Drawer.Screen name={ROUTES.TO_DO} component={renderToDoComponent} />
      <Drawer.Screen
        name={ROUTES.SETTINGS}
        component={renderSettingsComponent}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
