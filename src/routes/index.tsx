import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Onboarding } from '../pages/Authentication';
import { LoadAssets } from '../components';

const AuthRoutes = createStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <AuthRoutes.Navigator headerMode="none">
      <AuthRoutes.Screen name="Onboarding" component={Onboarding} />
    </AuthRoutes.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <LoadAssets>
      <AuthNavigator />
    </LoadAssets>
  );
};

export default Routes;
