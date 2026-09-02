import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Formulario() {
    return (
        <View style={styles.container}>

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                keyboardType="default"
            />

            <Text style={styles.label}>Telefone:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu telefone"
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Endereço:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu endereço"
                keyboardType="default"
            />

            <Text style={styles.label}>Data de nascimento:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua data de nascimento"
                keyboardType="default"
            />

            <Text style={styles.label}>CPF:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu CPF"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Sexo:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu sexo"
                keyboardType="default"
            />

            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />

            <View style={styles.button}>
                <Button
                    title="Enviar"
                    onPress={() => alert("Cadastrado e enviado!")}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5FCFF',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
        color: '#333',
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        fontSize: 16,
    },

    button: {
        marginTop: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
});