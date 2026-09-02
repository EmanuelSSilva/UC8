import { StyleSheet, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"


import Cadastro from "./src/screen/Cadastro.js"
import Login from "./src/screen/login.js"
import Perfil from "./src/screen/Perfil.js"
import Configuracao from "./src/screen/Configuracao.js" 

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const TabNavigator = ({route}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Perfil" component={Perfil} initialParams={route.params.nome} options={{ tabBarIcon: () => <Ionicons name="person" size={24} color="black" /> }}/>
            <Tab.Screen name="Configuracao" component={Configuracao} initialParams={route.params.nome} options={{ tabBarIcon: () => <Ionicons name="person" size={24} color="black" /> }}/>
        </Tab.Navigator>
    )
}

const AppNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
            <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <NavigationContainer>
                    <AppNavigation />
                </NavigationContainer>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

