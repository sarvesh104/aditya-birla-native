import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Project from '../screens/ProjectScreen';
import Leads from '../screens/LeadsScreen';
import Payment from '../screens/PaymentScreen';
import Profile from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Project" component={Project} />
    <Tab.Screen name="Leads" component={Leads} />
    <Tab.Screen name="Payment" component={Payment} />
    <Tab.Screen name="Notifications" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigation;
