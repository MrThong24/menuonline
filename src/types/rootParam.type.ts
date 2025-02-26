import { AuthStackScreens, NavigationStackScreens } from "../common/enum";

export type RootStackParamList = {
  [NavigationStackScreens.Splash]: undefined;
  [NavigationStackScreens.AuthNavigation]: undefined;
  [NavigationStackScreens.MainNavigation]: undefined;
  [AuthStackScreens.Login]: undefined;
};