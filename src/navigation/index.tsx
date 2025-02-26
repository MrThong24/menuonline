import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/rootParam.type";
import { NavigationStackScreens } from "../common/enum";
import AuthNavigationRoutes from "./auth";
import Splash from "../screen/Splash";

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationStackScreens.Splash}
        screenOptions={{
          gestureEnabled: false,
          orientation: "portrait",
        }}
      >
        <Stack.Screen
          name={NavigationStackScreens.Splash}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStackScreens.AuthNavigation}
          component={AuthNavigationRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
