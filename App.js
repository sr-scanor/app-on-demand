import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./src/screens/Subscribre";
import HomeScreen from "./src/screens/Login";
import CalcRegradeTres from "./src/screens/CalcRegradetres";
import {
  useFonts,
  Inter_100Thin,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_200ExtraLight,
  Inter_300Light,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_700Bold,Montserrat_400Regular

} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";


const Stack = createNativeStackNavigator();

function App() {
  const [loading] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  if (!loading) {
    <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CalcRegradeTres">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CalcRegradeTres"
          component={CalcRegradeTres}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
