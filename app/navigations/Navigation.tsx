import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import GameStack from "./GameStack";
import PlayStack from "./PlayStack";
import TournamentsStack from "./TournamentsStack";
import UsersStack from "./UsersStack";
import { useContext } from "react";
import AuthContext from "@app/contexts/AuthContext";
const Tab = createBottomTabNavigator();

function NavigationsTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Torneos" component={TournamentsStack} />
      <Tab.Screen name="Partida" component={GameStack} />
      <Tab.Screen name="Juega" component={PlayStack} />
      <Tab.Screen name="Usuarios" component={UsersStack} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const { isAuth } = useContext(AuthContext);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuth ? <NavigationsTabs /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
