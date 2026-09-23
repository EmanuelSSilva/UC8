import React from "react";

import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Configuracao({ route, navigation }) {
  const nome = route?.params?.nome ?? "";
  const email = route?.params?.email ?? "";

  function handleInformacoes() {
    navigation.navigate("Info");
  }

  function handleSair() {
    if (navigation && navigation.navigate) {
      // Tenta navegar para a tela de login; ajuste o nome da rota se necessário
      navigation.goBack();
      return;
    }
    Alert.alert("Sair", "Navegação indisponível");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.botao} onPress={handleInformacoes}>
          <Text style={styles.textoBotao}>Informações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSair} onPress={handleSair}>
          <Text style={styles.textoBotao}>Sair</Text>
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
    paddingHorizontal: 20,
  },
  botao: {
    width: "100%",
    height: 52,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  botaoSair: {
    width: "100%",
    height: 52,
    backgroundColor: "#DC2626",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});