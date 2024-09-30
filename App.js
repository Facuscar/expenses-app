import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import ManageExpensesScreen from "./screens/ManageExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { GlobalStyles } from './constants/styles';
import IconButton from './components/ExpensesOutput/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => <IconButton icon="add" size={24} color={tintColor} onPress={() => {}} />
      }}
    >
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpensesScreen}
        options={{
          tabBarLabel: "Recent",
          title: "Recent expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }} 
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpensesScreen}
        options={{
          tabBarLabel: "All expenses",
          title: "All expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }} 
        />
    </BottomTabs.Navigator>
  ) 
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpense' component={ManageExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

