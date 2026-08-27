export type PomodoroMode = 'work' | 'break';

export interface PomodoroConfig {
  workHours: number;
  workMinutes: number;
  breakCount: number;
  breakMinutes: number;
}