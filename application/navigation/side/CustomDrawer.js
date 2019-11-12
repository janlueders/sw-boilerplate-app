import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {bottomTabBar} from '../bottom/bottomBar';
import CustomDrawComponent from './CustomDrawComponent';

export const CustomDrawer = createDrawerNavigator({
    //Drawer Optons and indexing
    Screen1:  bottomTabBar,
},{
    contentComponent: CustomDrawComponent
});
