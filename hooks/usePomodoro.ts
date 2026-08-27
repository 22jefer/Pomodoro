import { useEffect, useState } from 'react';

import {
  DEFAULT_POMODORO_CONFIG,
} from '@/constants/pomodoro';

import {
  PomodoroConfig,
  PomodoroMode,
} from '@/types/pomodoro';

import {
  calcularTiempoTrabajo,
} from '@/utils/pomodoro';

export function usePomodoro(
  initialConfig: PomodoroConfig =
    DEFAULT_POMODORO_CONFIG
) {

  const [
    config,
    setConfig,
  ] = useState(initialConfig);

  const [
    mode,
    setMode,
  ] = useState<PomodoroMode>('work');

  const [
    interval,
    setIntervalNumber,
  ] = useState(1);

  const [
    time,
    setTime,
  ] = useState(
    calcularTiempoTrabajo(initialConfig) * 60
  );

  const [
    isRunning,
    setIsRunning,
  ] = useState(false);


  // ─────────────────────────────
  // Tiempo de cada trabajo
  // ─────────────────────────────

  const workIntervalMinutes =
    calcularTiempoTrabajo(config);

  // ─────────────────────────────
  // Temporizador
  // ─────────────────────────────

  useEffect(() => {

    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {

      setTime((currentTime) => {

        if (currentTime <= 1) {
          return 0;
        }

        return currentTime - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, [isRunning]);

  // ─────────────────────────────
  // Detectar final del intervalo
  // ─────────────────────────────

  useEffect(() => {

    if (time > 0) {
      return;
    }

    if (mode === 'work') {
      finishWork();
      return;
    }

    finishBreak();

  }, [time, mode]);

  // ─────────────────────────────
  // Trabajo terminado
  // ─────────────────────────────

  const finishWork = () => {

    /*
     * Si todavía hay descansos pendientes,
     * comenzamos el descanso.
     */

    if (interval <= config.breakCount) {

      setMode('break');

      setTime(
        config.breakMinutes * 60
      );

      return;
    }

    /*
     * Ya terminamos todo el trabajo.
     */

    setIsRunning(false);
  };

  // ─────────────────────────────
  // Descanso terminado
  // ─────────────────────────────

  const finishBreak = () => {

    const nextInterval =
      interval + 1;

    /*
     * Si ya no quedan intervalos
     * de trabajo, terminamos.
     */

    if ( nextInterval > config.breakCount) {
        // setMessage('!Descanso y trabajo terminado.!')
        setIsRunning(false);
        return;
    }

    setIntervalNumber(nextInterval);

    setMode('work');

    setTime(
      workIntervalMinutes * 60
    );
  };

  // ─────────────────────────────
  // Iniciar
  // ─────────────────────────────

  const start = () => {
    setIsRunning(true);
  };

  // ─────────────────────────────
  // Pausar
  // ─────────────────────────────

  const pause = () => {
    setIsRunning(false);
  };

  // ─────────────────────────────
  // Reiniciar
  // ─────────────────────────────

  const reset = () => {

    setIsRunning(false);

    setMode('work');

    setIntervalNumber(1);

    setTime(
      workIntervalMinutes * 60
    );
  };

  // ─────────────────────────────
  // Actualizar configuración
  // ─────────────────────────────

  const updateConfig = (
    newConfig: PomodoroConfig
  ) => {

    setConfig(newConfig);

    /*
     * Si no está ejecutándose,
     * recalculamos inmediatamente
     * el primer intervalo.
     */

    if (!isRunning) {

      const newWorkTime =
        calcularTiempoTrabajo(
          newConfig
        );

      setTime(
        newWorkTime * 60
      );

      setMode('work');

      setIntervalNumber(1);
    }
  };

  return {
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
  };
}