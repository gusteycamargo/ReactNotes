import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import api from '../services/api';

function Details({ navigation }) {
    async function getNotes() {
        const response = await api.get('/notes');

        console.log(response);
    }

    return(
       <ScrollView style={styles.main}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.noteTitle}>Título</Text>
                    <Text>Detalhes das notas aqui</Text>
                </View>
                <View style={styles.buttonsGroup}>
                    <TouchableOpacity onPress={getNotes}>
                        <MaterialIcons name="delete" style={styles.buttons} color="#FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="edit" style={styles.buttons} color="#FFF"/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <View>
                    <Text style={styles.noteTitle}>Título</Text>
                    <Text>Detalhes das notas aqui</Text>
                </View>
                <View style={styles.buttonsGroup}>
                    <TouchableOpacity>
                        <MaterialIcons name="delete" style={styles.buttons} color="#FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="edit" style={styles.buttons} color="#FFF"/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <View>
                    <Text style={styles.noteTitle}>Título</Text>
                    <Text>Detalhes das notas aqui</Text>
                </View>
                <View style={styles.buttonsGroup}>
                    <TouchableOpacity>
                        <MaterialIcons name="delete" style={styles.buttons} color="#FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="edit" style={styles.buttons} color="#FFF"/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <View>
                    <Text style={styles.noteTitle}>Título</Text>
                    <Text>Detalhes das notas aqui</Text>
                </View>
                <View style={styles.buttonsGroup}>
                    <TouchableOpacity>
                        <MaterialIcons name="delete" style={styles.buttons} color="#FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="edit" style={styles.buttons} color="#FFF"/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>    
    );
}

const styles = StyleSheet.create({
    main: { 
        flex: 1, 
        backgroundColor: '#FFF',
        padding: 10,
    },
    card: {
        justifyContent: 'space-between',
        padding: 13,
        borderWidth: 1,
        borderColor: '#CCC',
        height: 300,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
        marginBottom: 30,
    },  
    noteTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 7,
    },
    buttonsGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttons: {
        color: '#A24AC1',
        fontSize: 27, 
        marginLeft: 10,
    },
});

export default Details;