import { useState } from "react"

import { View, Text, TextInput, StyleSheet, Linking} from "react-native"

export default function Formulario() {
    const [nome, setNome] = useState("")

    return (
        <View style={styles.container}>
            <Text>Digite seu nome:</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />

            <Text>Olá, {nome}!</Text>
            <Text onPress={() => Linking.openURL('https://www.google.com')}>Clique aqui</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
    },
})