
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import RoutesDashboard from './dashboard/dashboardRoutes'
import App from './componentes/login'

const Stack = createStackNavigator();
export default function Routes() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={App}
          options={{ headerShown:false}}
        />
        <Stack.Screen  name="Dashboard" options={{ headerShown:false}}
            component={RoutesDashboard}   />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

