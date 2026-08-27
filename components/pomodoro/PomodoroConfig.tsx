import {
  StyleSheet,
  TextInput,
} from 'react-native';

import { Text, View } from '@/components/Themed';

import { PomodoroConfig as PomodoroConfigType } from '@/types/pomodoro';

interface Props {
  config: PomodoroConfigType;
  onChange: (
    config: PomodoroConfigType
  ) => void;
  disabled?: boolean;
}

export default function PomodoroConfig({
  config,
  onChange,
  disabled = false,
}: Props) {

  const updateValue = (
    field: keyof PomodoroConfigType,
    value: string
  ) => {
    if (value === '') {
      return;
    }

    const numberValue = Number(value);

    if (
      !Number.isFinite(numberValue) ||
      numberValue < 0
    ) {
      return;
    }

    onChange({
      ...config,
      [field]: numberValue,
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Configuración
      </Text>

      {/* Tiempo de trabajo */}

        <View style={styles.containerHrsMts}>
            <View style={styles.field}>
                <Text>
                Horas
                </Text>

                <TextInput
                style={styles.input}
                value={String(config.workHours)}
                keyboardType="numeric"
                editable={!disabled}
                onChangeText={(value) =>
                    updateValue(
                    'workHours',
                    value
                    )
                }
                />
            </View>

            <View style={styles.field}>
                <Text>
                Minutos
                </Text>

                <TextInput
                style={styles.input}
                value={String(config.workMinutes)}
                keyboardType="numeric"
                editable={!disabled}
                onChangeText={(value) =>
                    updateValue(
                    'workMinutes',
                    value
                    )
                }
                />
            </View>
        </View>

      {/* Descansos */}

      <View style={styles.field}>
        <Text>
          Cantidad de descansos
        </Text>

        <TextInput
          style={styles.input}
          value={String(config.breakCount)}
          keyboardType="numeric"
          editable={!disabled}
          onChangeText={(value) =>
            updateValue(
              'breakCount',
              value
            )
          }
        />
      </View>

      <View style={styles.field}>
        <Text>
          Tiempo de descanso (minutos)
        </Text>

        <TextInput
          style={styles.input}
          value={String(config.breakMinutes)}
          keyboardType="numeric"
          editable={!disabled}
          onChangeText={(value) =>
            updateValue(
              'breakMinutes',
              value
            )
          }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: 425,
    gap: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  field: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 0,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 6,
    width: 60
  },

  containerHrsMts:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10
  }
});