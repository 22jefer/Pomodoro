import { PomodoroConfig } from '@/types/pomodoro';

/**
 * Convierte horas y minutos a minutos totales.
 */
export const obtenerTrabajoTotalMinutos = (
  workHours: number,
  workMinutes: number
): number => {
  return workHours * 60 + workMinutes;
};

/**
 * Calcula cuánto debe durar cada intervalo de trabajo.
 *
 * Ejemplo:
 *
 * Trabajo total = 240 min
 * Descansos = 2
 * Descanso = 5 min
 *
 * 240 / 2 = 120
 * 120 - 5 = 115
 *
 * Resultado: 115 minutos = 1h 55m
 */
export const calcularTiempoTrabajo = (
  config: PomodoroConfig
): number => {
  const trabajoTotal = obtenerTrabajoTotalMinutos(
    config.workHours,
    config.workMinutes
  );

  if (config.breakCount <= 0) {
    return trabajoTotal;
  }

  const tiempoPorIntervalo =
    trabajoTotal / config.breakCount;

  const tiempoTrabajo =
    tiempoPorIntervalo - config.breakMinutes;

  return Math.max(0, Math.floor(tiempoTrabajo));
};