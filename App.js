import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store/redux/store';
import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authenticate } from './store/redux/auth';
import AppLoading from 'expo-app-loading';

import MainScreen from './screens/MainScreen';
import BookScreen from './screens/BookScreen';
import PaymentScreen from './screens/PaymentScreen';
import AddCardScreen from './screens/AddCardScreen';
import VoucherScreen from './screens/VoucherScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import FAQScreen from './screens/FAQScreen';
import BuyPassScreen from './screens/BuyPassScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChangeCredentialsScreen from './screens/ChangeCredentialsScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="BookScreen"
        component={BookScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AddCardScreen"
        component={AddCardScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="VoucherScreen"
        component={VoucherScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="BuyPassScreen"
        component={BuyPassScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ChangeCredentialsScreen"
        component={ChangeCredentialsScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthStack />}
      {isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        dispatch(authenticate({ token: storedToken }))
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />
  }
  return <Navigation />
}

export default function App() {


  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
