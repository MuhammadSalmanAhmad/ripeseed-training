import "./global.css"
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import SignUp from "./src/screens/UserRegistration";
import Home from "./src/screens/Home";
import { options } from "prettier-plugin-tailwindcss";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};


const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Login',
  screens: {
    Login: Login,
    SignUp: SignUp,
    Home: {
      screen:Home,
      options:{
        headerShown:false
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (

    <Navigation></Navigation>


  );
}

