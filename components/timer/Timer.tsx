import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

interface Props {
  time: number;
}

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);

  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  const seconds = totalSeconds % 60;

  return [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
  ].join(':');
};

export default function Timer({ time }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {formatTime(time)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 20,
  },

  timer: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});