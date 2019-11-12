import React from 'react';
import {
    createSwitchNavigator,
} from 'react-navigation';

import SplashScreen from '../views/splash';
import {CustomDrawer} from './side/CustomDrawer';

const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: CustomDrawer
});

export default InitialNavigator;
