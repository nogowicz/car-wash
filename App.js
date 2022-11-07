import { StatusBar } from 'expo-status-bar';
import MainScreen from './screens/MainScreen';
import BookScreen from './screens/BookScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from './screens/PaymentScreen';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
