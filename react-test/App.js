import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ArrowLeftIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";

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
              <ArrowLeftIcon style={{ marginLeft: 10 }} size={24} />
            ),
            headerRight: () => (
              <View style={styles.headderRightStyle}>
                <HeartIcon size={24} style={styles.icon} />
                <MagnifyingGlassIcon style={styles.icon} size={24} />
                <ShoppingBagIcon style={styles.icon} size={24} />
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
  container:{
    flex:1
  }
});
