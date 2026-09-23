import { StyleSheet, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import Cadastro from "./src/screen/Cadastro.js"
import Login from "./src/screen/login.js"
import Perfil from "./src/screen/Perfil.js"
import Configuracao from "./src/screen/Configuracao.js"
import Info from "./src/screen/info.js"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();


// TABS
const TabNavigator = ({ route }) => {

    const params = route?.params ?? {};
    const { nome, email } = params;

    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                initialParams={{
                    nome: nome,
                    email: email
                }}
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="person"
                            size={24}
                            color="black"
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Configuracao"
                component={Configuracao}
                initialParams={{
                    nome: nome,
                    email: email
                }}
                options={{
                    tabBarIcon: () => (
                        <Ionicons
                            name="settings"
                            size={24}
                            color="black"
                        />
                    )
                }}
            />

        </Tab.Navigator>
    );
};


// STACK
const AppNavigation = () => {

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Tabs"
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Info"
                component={Info}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    );
};


// APP
export default function App() {

    return (
        <SafeAreaProvider>

            <View style={styles.container}>

                <NavigationContainer>
                    <AppNavigation />
                </NavigationContainer>

            </View>

        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

});