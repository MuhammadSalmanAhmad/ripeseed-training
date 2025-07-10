import "./global.css";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/UserRegistration";
import Home from "./src/screens/Home";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WalletScreen from "./src/screens/Wallet";
import { useEffect } from "react";
import auth, { userAuthState } from "./src/services/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { userAuthStore } from "./src/hooks/userAuthStore";

const Stack = createNativeStackNavigator();

export  function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export  function AppNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Wallet" component={WalletScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const { user, setUser, authState, setAuthState } = userAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthState()
    });
    return unsubscribe;
  }, []);


  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}