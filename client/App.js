import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/store';
import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import WatchlistScreen from './src/screens/WatchlistScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const App = () => {
  const MaterialBottomTabs = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();

  const setDefaultOptions = title => {
    return ({
      headerTitle: () => <Header title={title} />,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#303684',
      },
      headerTintColor: 'white'
    });
  };

  const createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator barStyle={{ backgroundColor: '#303684' }} >
        <MaterialBottomTabs.Screen
          name="Home"
          options={{
            tabBarIcon: () => <Ionicons name="md-home" size={24} color="white" />
          }}
          children={createHomeStack}
        />
        <MaterialBottomTabs.Screen
          name="Watchlist"
          options={{
            tabBarLabel: 'Watchlist',
            tabBarIcon: () => <MaterialIcons name="star" size={24} color="white" />
          }}
          children={createWatchlistStack}
        />
      </MaterialBottomTabs.Navigator>
    );
  };

  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Header
                title='STOCK TRACKER'
                icon={<MaterialCommunityIcons name="chart-timeline-variant" size={26} color="white" />}
              />
            ),
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#303684' }
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} options={setDefaultOptions('STOCK DETAILS')} />
        <Stack.Screen name="LogIn" component={LogInScreen} options={setDefaultOptions('LOG IN')} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={setDefaultOptions('SIGN UP')} />
      </Stack.Navigator>
    );
  };

  const createWatchlistStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Watchlist" component={WatchlistScreen} options={setDefaultOptions('WATCHLIST')} />
        <Stack.Screen name="Detail" component={DetailScreen} options={setDefaultOptions('STOCK DETAILS')} />
        <Stack.Screen name="LogIn" component={LogInScreen} options={setDefaultOptions('LOG IN')} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={setDefaultOptions('SIGN UP')} />
      </Stack.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        {createBottomTabs()}
      </NavigationContainer>
    </Provider>
  );

}

export default App;