import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootParam.type";
import { AuthStackScreens, NavigationStackScreens } from "../../common/enum";
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigationRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthStackScreens.Login}
      screenOptions={{
        gestureEnabled: false,
        orientation: "portrait",
      }}
    >
      <Stack.Screen
        name={AuthStackScreens.Login}
        component={AuthNavigationRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigationRoutes;
