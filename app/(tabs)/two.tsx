import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Timer from '@/components/timer';
import Header from '@/components/header';

const colores = ['#fff','#fff', '#fff']

export default function two() {

  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);
  const [isWorking, setIsWorking] = useState(false);

  return (
    <View style={[styles.container, {backgroundColor : colores[currentTime]}]}>
      <Header 
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Timer time={time} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{}
})