# App Mobile - Pomodoro

Aplicación móvil desarrollada con React Native, Expo y TypeScript para gestionar intervalos configurables de trabajo y descanso mediante un temporizador Pomodoro.

## Características

- Configuración del tiempo total de trabajo.
- Configuración de la cantidad de descansos.
- Configuración de la duración de los descansos.
- Cálculo automático de los intervalos de trabajo.
- Cambio automático entre trabajo y descanso.
- Inicio del temporizador.
- Pausa del temporizador.
- Reinicio del temporizador.
- Componentes nativos de React Native.
- Arquitectura modular y separación de responsabilidades.

## Lógica del Pomodoro

El usuario define:

- Tiempo total de trabajo.
- Cantidad de descansos.
- Tiempo de cada descanso.

La duración de cada intervalo de trabajo se calcula mediante:

    Tiempo de trabajo por intervalo =
    (Tiempo total de trabajo / Cantidad de descansos) - Tiempo de descanso

Por ejemplo:

    Tiempo total de trabajo: 4 horas
    Cantidad de descansos: 2
    Tiempo de descanso: 5 minutos

Conversión:

    4 horas = 240 minutos

    240 / 2 = 120 minutos

    120 - 5 = 115 minutos

Por lo tanto:

    Trabajo 1: 1 hora 55 minutos
    Descanso: 5 minutos

    Trabajo 2: 1 hora 55 minutos
    Descanso: 5 minutos

    Fin

El flujo es:

    Trabajo 1:55
         |
         v
    Descanso 5m
         |
         v
    Trabajo 1:55
         |
         v
    Descanso 5m
         |
         v
        Fin

## Tecnologías

- React Native
- Expo SDK 54
- TypeScript
- Expo Router
- JavaScript
- React Hooks
- React Native StyleSheet
- Git
- GitHub

## Estructura del proyecto

    App_mobile/
    |
    +-- app/
    |   +-- (tabs)/
    |       +-- index.tsx
    |
    +-- components/
    |   +-- pomodoro/
    |   |   +-- PomodoroConfig.tsx
    |   |   +-- PomodoroControls.tsx
    |   |
    |   +-- timer/
    |       +-- Timer.tsx
    |
    +-- constants/
    |   +-- pomodoro.ts
    |
    +-- hooks/
    |   +-- usePomodoro.ts
    |
    +-- types/
    |   +-- pomodoro.ts
    |
    +-- utils/
    |   +-- pomodoro.ts
    |
    +-- package.json
    +-- tsconfig.json
    +-- README.md

## Instalación

Clonar el repositorio:

    git clone https://github.com/22jefer/Pomodoro.git 

Entrar en el proyecto:

    cd App_mobile

Instalar las dependencias:

    npm install

## Ejecución

Para iniciar el servidor de desarrollo:

    npx expo start

Para ejecutar Android:

    npm run android

Para ejecutar iOS:

    npm run ios

Para ejecutar la versión web (Recomendada por agilidad):

    npm run web

La compilación directa para iOS requiere macOS. Durante el desarrollo también se puede utilizar Expo Go.

## Próximas mejoras

- Diseño UX.

## Estado del proyecto

En desarrollo.

La versión actual establece la estructura base del temporizador Pomodoro y permite configurar el tiempo de trabajo, cantidad de descansos y duración de los descansos.

La arquitectura está preparada para incorporar nuevas funcionalidades sin concentrar toda la lógica en la pantalla principal.
