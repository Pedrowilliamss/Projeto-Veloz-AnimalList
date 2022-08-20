import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Animais = ({ data }) => {

    return (
        <View style={estilos.lista}>
            <Text style={estilos.content}>{data.id}</Text>
            <Text style={estilos.content}>{data.type}</Text>
            <Text style={estilos.content}>{data.price}</Text>
        </View>
    )

}

const estilos = StyleSheet.create({
    lista: {
        flexDirection: 'row',
        marginHorizontal: '10%',
        backgroundColor: '#F27141'
    },
    content: {
        color: 'white',
        fontSize: 20,
        marginVertical: "8%",
        paddingLeft: '5%',
        paddingRight: '20%'
    }
})

export default Animais;