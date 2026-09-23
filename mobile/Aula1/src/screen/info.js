import React from "react";
import { Button } from "react-native";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import * as Device from "expo-device";


export default function Info({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />

      <Text style={styles.new } > {'\n'} Informaçoes do app</Text>

      <Text style={styles.Text}>
        {'\n'} Nome do dispositivo: {Device.deviceName}
        {'\n'} Sistema operacional: {Device.osName}
        {'\n'} Versão do sistema operacional: {Device.osVersion}
        {'\n'} Modelo do dispositivo: {Device.modelName}
        {'\n'} Fabricante do dispositivo: {Device.manufacturer}
        {'\n'} ID do dispositivo: {Device.deviceId}
        {'\n'} Capacidade de armazenamento: {Device.totalMemory}
        {'\n'} Espaço livre: {Device.freeMemory}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold", 
    marginBottom: 10,   
    },
  new: {
    fontSize: 16,
    marginBottom: 20,
  },
  TextoBotao: {
    fontSize: 16,
    color: "#fff",  
    },
    Text: {
      fontSize: 16,
      color: "#000",  
      },
});
