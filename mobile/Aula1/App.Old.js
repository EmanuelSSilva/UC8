import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
{/*import Formulario from './src/components/Form'*/}
{/*import Formulario from './src/components/hooks'*/}
{/*import Perfil from './src/components/Perfil'*/}
{/*import TelaInicial from './src/components/GerenInici'*/}
import Link from './src/components/Link'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/*<Formulario ></Formulario>*/} 
      {/*<Perfil></Perfil>*/}
      {/*<TelaInicial></TelaInicial>*/}
      <Link />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
