const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge1 from "./screens/AndroidLarge1";
import AndroidLarge9 from "./screens/AndroidLarge9";
import AndroidLarge15 from "./screens/AndroidLarge15";
import AndroidLarge7 from "./screens/AndroidLarge7";
import AndroidLarge17 from "./screens/AndroidLarge17";
import AndroidLarge16 from "./screens/AndroidLarge16";
import AndroidLarge19 from "./screens/AndroidLarge19";
import AndroidLarge18 from "./screens/AndroidLarge18";
import AndroidLarge21 from "./screens/AndroidLarge21";
import AndroidLarge20 from "./screens/AndroidLarge20";
import AndroidLarge23 from "./screens/AndroidLarge23";
import AndroidLarge22 from "./screens/AndroidLarge22";
import AndroidLarge25 from "./screens/AndroidLarge25";
import AndroidLarge24 from "./screens/AndroidLarge24";
import AndroidLarge3 from "./screens/AndroidLarge3";
import AndroidLarge4 from "./screens/AndroidLarge4";
import AndroidLarge27 from "./screens/AndroidLarge27";
import AndroidLarge8 from "./screens/AndroidLarge8";
import AndroidLarge13 from "./screens/AndroidLarge13";
import AndroidLarge2 from "./screens/AndroidLarge2";
import AndroidLarge26 from "./screens/AndroidLarge26";
import AndroidLarge6 from "./screens/AndroidLarge6";
import AndroidLarge11 from "./screens/AndroidLarge11";
import AndroidLarge10 from "./screens/AndroidLarge10";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
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
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge9"
              component={AndroidLarge9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge15"
              component={AndroidLarge15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge7"
              component={AndroidLarge7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge17"
              component={AndroidLarge17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge16"
              component={AndroidLarge16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge19"
              component={AndroidLarge19}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge18"
              component={AndroidLarge18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge21"
              component={AndroidLarge21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge20"
              component={AndroidLarge20}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge23"
              component={AndroidLarge23}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge22"
              component={AndroidLarge22}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge25"
              component={AndroidLarge25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge24"
              component={AndroidLarge24}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge4"
              component={AndroidLarge4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge27"
              component={AndroidLarge27}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge8"
              component={AndroidLarge8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge13"
              component={AndroidLarge13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge26"
              component={AndroidLarge26}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge6"
              component={AndroidLarge6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge11"
              component={AndroidLarge11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge10"
              component={AndroidLarge10}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
