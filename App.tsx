import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SIgnIn';
import SignUp from './src/pages/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomePage';
import AddTransaction from './src/pages/AddTransaction';
import Profile from './src/pages/Profile';
import './src/config/Firebase';
import FlashMessage from 'react-native-flash-message';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Order') {
            iconName = 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          const iconSize = 40;

          return <Icon name={iconName} color={color} size={iconSize} />;
        },
        tabBarActiveTintColor: '#FFA500',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {display: 'none'},
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Order"
        component={AddTransaction}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
