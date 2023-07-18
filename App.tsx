import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TamaguiProvider } from 'tamagui';

import tamaguiConfig from './tamagui.config';
import { DrawerNavigator } from './navigators';

function App(): JSX.Element {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

export default App;
