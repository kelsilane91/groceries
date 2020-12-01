/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/screens/Home';
import {Button, Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {Inventory} from './src/screens/Inventory';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <PaperProvider>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Inventory"
              component={Inventory}
              options={{
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    color="blue">
                    Edit
                  </Button>
                ),
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
