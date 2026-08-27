import { Button, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';

interface Props {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function PomodoroControls({
  isRunning,
  onStart,
  onPause,
  onReset,
}: Props) {
  return (
    <View style={styles.container}>

      <Button
        title="Iniciar"
        onPress={onStart}
        disabled={isRunning}
      />

      <Button
        title="Pausar"
        onPress={onPause}
        disabled={!isRunning}
      />

      <Button
        title="Reiniciar"
        onPress={onReset}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    gap: 10,
  },
});