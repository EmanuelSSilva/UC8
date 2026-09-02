import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'


export default function TelaInicial() {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {

    if (!titulo.trim()) {
      Alert.alert('Atenção', 'Digite o título da tarefa.');
      return;
    }

    const novaTarefa = {
      titulo: titulo,
      descricao: descricao
    };

    setTarefas([...tarefas, novaTarefa]);

    setTitulo('');
    setDescricao('');

    Alert.alert('Sucesso', 'Tarefa adicionada!');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Nova tarefa
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Título da tarefa"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />
        <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Data e hora">
      <DateTimePicker
        value={new Date()}
        mode='time'
        is24Hour={true}
        />
        </TextInput>


      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarTarefa}
      >
        <Text style={styles.textoBotao}>
          Adicionar tarefa
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoLista}
        onPress={() => navigation.navigate('Tarefas')}
      >
        <Text style={styles.textoBotaoLista}>
          Ver minhas tarefas
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16
  },

  textArea: {
    height: 120,
    textAlignVertical: 'top'
  },

  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  botaoLista: {
    marginTop: 15,
    padding: 15,
    alignItems: 'center'
  },

  textoBotaoLista: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold'
  }

});