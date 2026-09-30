# Perfil 3 - Rick and Morty App

Aplicación móvil desarrollada con React Native y Expo que consume la API de [Rick and Morty](https://rickandmortyapi.com/api/character).

## Datos del estudiante

- **Nombre:** Marcos Landaverde
- **Carnet:** 20240139

## Enlaces

- **Descargar APK:** [Descargar APK](https://expo.dev/artifacts/eas/BsUDaImY_4AD9Je0HKfaFDtv2mzv1osa7hdAK8hUMlI.apk)

## Funcionalidades

- Splash screen e icono personalizados.
- Pantalla 1: información del estudiante (nombre, carnet, sección y grupo) con botón para navegar a la pantalla 2.
- Pantalla 2: listado de personajes obtenidos de la API de Rick and Morty.

## Estructura del proyecto

```
src/
├── components/   # Componentes reutilizables (CharacterCard, InfoRow, PrimaryButton, Loader, ErrorMessage)
├── data/         # Datos del estudiante
├── hooks/        # Custom hooks (useCharacters)
├── navigation/   # Configuración de React Navigation
├── screens/      # Pantallas de la app
└── theme/        # Colores
```

## Ejecutar el proyecto

```bash
npm install
npx expo start
```

## Generar el APK

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```
