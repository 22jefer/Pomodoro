import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from '@expo/ui/swift-ui'
import { background, border } from '@expo/ui/jetpack-compose'

const opciones = ['Pomodoro','Descanso Largo', 'Descanso corto']

interface Props{
    currentTime: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;

}

export default function Header({setTime, currentTime, setCurrentTime}: Props) {

    function handlePress(index: number): void{
        if(index === opciones.length){
            setCurrentTime(index)
        }else{
            const newTime = (index === 0 ? 25 : (index === 1 ? 5: 15));
            setCurrentTime(index)
            setTime(newTime * 60)
        }
    }

    return (
        <View>
        <View>
            {
                opciones.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handlePress(index)}
                        style={[styles.itemStyle,
                            currentTime !== index &&{
                                borderColor: 'transparent'
                        }]}
                    >
                    </TouchableOpacity>
                ))
            }
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle:{

    }



})