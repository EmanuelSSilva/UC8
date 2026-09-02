import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

export default function Perfil({ route, navigation }) {

  const { nome, email } = route.params;

  function mostrarInformacoes() {
    Alert.alert(
      "Informações do usuário",
      `Nome: ${nome}\nE-mail: ${email}`
    );
  }

  function voltarLogin() {
    navigation.navigate("Login");
  }

  return (

    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>

        <Image
          source={{
            uri: "https://i.pravatar.cc/300",
          }}
          style={styles.imagemPerfil}
        />

        <Text style={styles.nome}>
          Bem-vindo, {nome}!
        </Text>

        <Text style={styles.descricao}>
          Este é o seu perfil
        </Text>

        <View style={styles.card}>

          <Text style={styles.label}>
            Nome
          </Text>

          <Text style={styles.valor}>
            {nome}
          </Text>

          <Text style={styles.label}>
            E-mail
          </Text>

          <Text style={styles.valor}>
            {email}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={mostrarInformacoes}
        >
          <Text style={styles.textoBotao}>
            Ver informações
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoSair}
          onPress={voltarLogin}
        >
          <Text style={styles.textoBotao}>
            Sair
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
    alignItems: "center",
    paddingHorizontal: 25,
  },

  imagemPerfil: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },

  nome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
  },

  descricao: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 25,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  label: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 4,
  },

  valor: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 15,
  },

  botao: {
    width: "100%",
    height: 52,
    backgroundColor: "#2563EB",
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",

    marginTop: 5,
  },

  botaoSair: {
    width: "100%",
    height: 52,
    backgroundColor: "#DC2626",
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",

    marginTop: 14,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});