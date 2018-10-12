import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import LoginOrRegisterScreen from '../screens/LoginOrRegisterScreen';
import RegisterScreen from '../screens/RegisterScreen';
import UspScreen from '../screens/UspScreen';
import WaitingForApprovalScreen from '../screens/WaitingForApprovalScreen';
import ApprovedScreen from '../screens/ApprovedScreen';
import OnboardScreen from '../screens/OnboardScreen';
import SelectSlotScreen from '../screens/SelectSlotScreen';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Login: LoginScreen,
  LoginOrRegister: LoginOrRegisterScreen,
  Register: RegisterScreen,
  Usp: UspScreen,
  WaitingForApproval: WaitingForApprovalScreen,
  Approved: ApprovedScreen,
  Onboarding: OnboardScreen,
  SelectSlot: SelectSlotScreen
}, {
    initialRouteName: 'Login'
  });
