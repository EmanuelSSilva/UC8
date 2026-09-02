import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

export default function Login({ navigation, route }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {

    if (!email || !senha) {

      Alert.alert(
        "Atenção",
        "Preencha e-mail e senha.."
      );

      return;
    }

    // Verifica se existem dados enviados pelo Cadastro
    if (
      route.params &&
      email === route.params.email &&
      senha === route.params.senha
    ) {

      navigation.navigate("Tabs", {
        nome: route.params.nome,
        email: route.params.email,
      });

    } else {

      Alert.alert(
        "Erro",
        "E-mail ou senha incorretos."
      );
    }
  }

  return (

    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>

        <Text style={styles.titulo}>
          Bem-vindo!
        </Text>

        <Text style={styles.subtitulo}>
          Entre na sua conta
        </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={fazerLogin}
        >
          <Text style={styles.textoBotao}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.link}>
            Ainda não tenho uma conta
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#1F2937",
    marginBottom: 15,
  },

  botao: {
    height: 52,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoCadastro: {
    alignItems: "center",
    marginTop: 20,
  },

  link: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "600",
  },

});