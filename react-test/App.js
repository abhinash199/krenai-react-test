import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SimpleLineIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            title: "Women",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 18,
            },
            headerLeft: () => (
              <AntDesign
                name="arrowleft"
                size={24}
                color="black"
                style={{ marginLeft: 10 }}
              />
            ),
            headerRight: () => (
              <View style={styles.headderRightStyle}>
                <Ionicons
                  name="md-heart-outline"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
                <Ionicons
                  name="ios-search-outline"
                  size={24}
                  style={styles.icon}
                  color="black"
                />
                <SimpleLineIcons
                  name="bag"
                  size={24}
                  style={styles.icon}
                  color="black"
                />
              </View>
            ),
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headderRightStyle: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 26,
  },
  container: {
    flex: 1,
  },
});
