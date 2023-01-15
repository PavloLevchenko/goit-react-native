import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { LoginScreen, RegistrationScreen } from "../screens";

const Stack = createNativeStackNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
