import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import Timer from '@/components/timer/Timer';

import PomodoroConfig from '@/components/pomodoro/PomodoroConfig';

import PomodoroControls from '@/components/pomodoro/PomodoroControls';

import { usePomodoro } from '@/hooks/usePomodoro';

export default function TabTwoScreen() {

  const {
    config,
    mode,
    interval,
    time,
    isRunning,
    workIntervalMinutes,
    updateConfig,
    start,
    pause,
    reset,

  } = usePomodoro();

  return (
    <View style={styles.container}>

      {/* Configuración */}

      <PomodoroConfig
        config={config}
        onChange={updateConfig}
        disabled={isRunning}
      />

      {/* Estado */}

      <Text style={styles.mode}>
        {mode === 'work'
          ? 'Trabajo'
          : 'Descanso'}
      </Text>

      {/* Timer */}

      <Timer time={time} />

      {/* Controles */}

      <PomodoroControls
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 15
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  mode: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  message:{
    fontSize: 20
  }

});