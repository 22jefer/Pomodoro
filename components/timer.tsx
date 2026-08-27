import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

interface Props{
    time: number;
}

const Timer = ({time}: Props) => {
    const formatoTiempo = (time: number) => {
    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    };
    return (
        <View style={styles.containerTime}>
        <Text style={styles.timer}>{formatoTiempo(time)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    timer:{
        fontSize: 20
    },
    containerTime:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 80,
        paddingVertical: 20,
        borderColor: '#000',
        borderWidth: .5,
        borderRadius: 20
    }
})

export default Timer