import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import ShoppingList from './ShoppingList'; // Garanta que o caminho está correto



export default function ShoppingList() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    if (text !== '') {
      setList([...list, text]);
      setText('');
    }
  };

  const handleRemoveItem = (index) => {
    const newList = list.filter((item, idx) => idx !== index);
    setList(newList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicione um novo item"
        value={text}
        onChangeText={setText}
      />
      <Button title="Adicionar" onPress={handleAddItem} color="#329542" />
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#329542',
  },
  input: {
    borderColor: '#8aad34',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8aad34',
  },
  itemText: {
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
