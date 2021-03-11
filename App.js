import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import HomeScreen from './components/HomeScreen'
import WeatherScreen from './components/weather/WeatherScreen'
import WaktuSolatScreen from './components/waktusolat/WaktuSolatScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DemoApp"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Weather"
            component={WeatherScreen}
          />
          <Stack.Screen
            name="WaktuSolat"
            component={WaktuSolatScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;