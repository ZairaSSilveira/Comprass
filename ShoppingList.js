import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ShoppingList() {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        if (inputText === '') return;
        setItems([...items, { id: Math.random().toString(), name: inputText }]);
        setInputText('');
    };

    const handleRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicione um novo item..."
                value={inputText}
                onChangeText={setInputText}
            />
            <Button
                title="Adicionar Item"
                onPress={handleAddItem}
                color="#329542"
            />
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.removeButton}>
                            <Text style={styles.removeButtonText}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
    },
    input: {
        borderColor: '#329542',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#8aad34',
        borderRadius: 5,
    },
    itemText: {
        color: '#FFF',
    },
    removeButton: {
        backgroundColor: '#FF3B30',
        padding: 5,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#FFF',
    },
});
