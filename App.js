const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LAZADARKUI from "./screens/LAZADARKUI";
import LAZADARKUI18 from "./components/LAZADARKUI18";
import LAZADARKUI1 from "./screens/LAZADARKUI1";
import LAZADARKUI2 from "./screens/LAZADARKUI2";
import LAZADARKUI3 from "./screens/LAZADARKUI3";
import LAZADARKUI4 from "./screens/LAZADARKUI4";
import LAZADARKUI5 from "./screens/LAZADARKUI5";
import LAZADARKUI6 from "./screens/LAZADARKUI6";
import LAZADARKUI7 from "./screens/LAZADARKUI7";
import LAZADARKUI8 from "./screens/LAZADARKUI8";
import LAZADARKUI9 from "./screens/LAZADARKUI9";
import LAZADARKUI10 from "./screens/LAZADARKUI10";
import LAZADARKUI11 from "./screens/LAZADARKUI11";
import LAZADARKUI12 from "./screens/LAZADARKUI12";
import LAZADARKUI13 from "./screens/LAZADARKUI13";
import LAZADARKUI14 from "./screens/LAZADARKUI14";
import LAZADARKUI15 from "./screens/LAZADARKUI15";
import LAZADARKUI16 from "./screens/LAZADARKUI16";
import LAZADARKUI17 from "./screens/LAZADARKUI17";
import LAZADARKUI19 from "./screens/LAZADARKUI19";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LAZADARKUI"
              component={LAZADARKUI}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI1"
              component={LAZADARKUI1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI2"
              component={LAZADARKUI2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI3"
              component={LAZADARKUI3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI4"
              component={LAZADARKUI4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI5"
              component={LAZADARKUI5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI6"
              component={LAZADARKUI6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI7"
              component={LAZADARKUI7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI8"
              component={LAZADARKUI8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI9"
              component={LAZADARKUI9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI10"
              component={LAZADARKUI10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI11"
              component={LAZADARKUI11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI12"
              component={LAZADARKUI12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI13"
              component={LAZADARKUI13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI14"
              component={LAZADARKUI14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI15"
              component={LAZADARKUI15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI16"
              component={LAZADARKUI16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI17"
              component={LAZADARKUI17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LAZADARKUI19"
              component={LAZADARKUI19}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
