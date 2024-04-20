import HomeScreen from "../../../src/screens/HomeScreen";
import MovieDetailScreen from "../../../src/screens/MovieDetailScreen";
import FullCastScreen from "../../../src/screens/FullCastScreen";
import COLORS from "../../../src/constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import ExploreStack from "../ExploreStack";
import ProfileStack from "../ProfileStack";
import SearchScreen from "../../../src/screens/SearchScreen";
import { Platform, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExploreScreen from "../../../src/screens/ExploreScreen";
import ProfileScreen from "../../../src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor:"black",
          height: 75,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={26}
              color={Platform.OS === "ios" && focused ? "red" : "white"}
              style={{
                padding: 15,
                backgroundColor: focused ? Platform.OS === "ios" ? "black" : "red" : "black",
                borderRadius: 100,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShadowVisible:false,
          headerShown: true,
          title:"",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <MaterialIcons color={"white"} name="arrow-back" size={20} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "black",
          },
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={26}
              color={Platform.OS === "ios" && focused ? "red" : "white"}
              style={{
                padding: 15,
                backgroundColor: focused ? Platform.OS === "ios" ? "black" : "red" : "black",
                borderRadius: 100,
              }}
            />
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />

      <Tab.Screen
        name="ExploreTab"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="explore"
              size={30}
              color={Platform.OS === "ios" && focused ? "red" : "white"}
              style={{
                padding: 15,
                backgroundColor: focused ? Platform.OS === "ios" ? "black" : "red" : "black",
                borderRadius: 100,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="account-circle"
              size={30}
              color={Platform.OS === "ios" && focused ? "red" : "white"}
              style={{
                padding: 15,
                backgroundColor: focused ? Platform.OS === "ios" ? "black" : "red" : "black",
                borderRadius: 100,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
