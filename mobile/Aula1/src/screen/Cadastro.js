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

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar() {

    if (!nome || !email || !senha) {

      Alert.alert(
        "Atenção",
        "Preencha todos os campos."
      );

      return;
    }

    Alert.alert(
      "Sucesso",
      "Cadastro realizado!"
    );

    navigation.navigate("Login", {
      nome: nome,
      email: email,
      senha: senha,
    });
  }

  return (

    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>

        <Text style={styles.titulo}>
          Criar conta
        </Text>

        <Text style={styles.subtitulo}>
          Preencha seus dados para criar sua conta
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />

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
          onPress={cadastrar}
        >
          <Text style={styles.textoBotao}>
            Cadastrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textoLink}>
            Já tenho uma conta
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

  botaoVoltar: {
    alignItems: "center",
    marginTop: 20,
  },

  textoLink: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "600",
  },

});