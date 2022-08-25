import { SignInScreen, SignUpScreen, AuthScreen } from "../screens/Auth";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function AuthStack() {
  const options = { headerTitle: "Test", headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthStack"
        component={AuthScreen}
        options={options}
      />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}    options={options}/>
      <Stack.Screen name="SignInScreen" component={SignInScreen}   options={options}/>
    </Stack.Navigator>
  );
}
