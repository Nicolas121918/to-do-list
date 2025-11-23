📌 TareApp — Lista de tareas con Ionic + Angular

Aplicación móvil/web para gestionar tareas con categoría, prioridad, fecha de vencimiento y barra de progreso.
Desarrollada con Ionic + Angular (standalone components) y persistencia en localStorage.

🚀 Tecnologías utilizadas

Angular 20

Ionic Framework

TypeScript / HTML / SCSS

Capacitor (Android/iOS)

LocalStorage (persistencia)

✨ Funcionalidades principales

✔ Agregar y eliminar tareas
✔ Marcar como completadas
✔ Categorías y prioridad
✔ Selección de fecha de vencimiento
✔ Barra de progreso dinámico
✔ Filtro de tareas por estado

🧠 Qué se aprendió / buenas prácticas aplicadas

Uso de standalone components en Angular

Separación de lógica en servicios (TaskService)

Persistencia de datos sin backend

Manejo de Ionic Components para UX móvil

Enrutamiento básico y tipado en TS

Adaptación rápida al stack Ionic + Angular, comprendiendo su estructura en poco tiempo


🛠️ Instalación y ejecución
npm install
npm run start   # http://localhost:4200

Generar build
npm run build

Sincronizar con Capacitor
npx cap sync

📱 Ejecutar en Android (opcional)
npm run build
npx cap sync android
npx cap open android

🌱 Futuras mejoras

Migrar a SQLite para persistencia móvil avanzada

Animaciones y mejor feedback visual

Filtros más avanzados

Tests unitarios y E2E


📱 Ejecutar en Android e iOS
🔹 Android

Requisitos

Android Studio instalado

Un emulador configurado o un celular con depuración USB activada

Pasos

npm install        # Instala dependencias
npm run build      # Genera la app
npx cap sync android  # Copia archivos web al proyecto nativo
npx cap open android  # Abre Android Studio


En Android Studio:

Selecciona un dispositivo/emulador

Presiona Run ▶️ para instalar y ejecutar la app

🍎 iOS (solo en macOS)

Requisitos

Xcode instalado

Simulator configurado o iPhone físico

Pasos

npm install
npm run build
npx cap sync ios
npx cap open ios


En Xcode:

Selecciona un dispositivo o simulador

Presiona ⌘ + R para compilar y ejecutar 🚀

Nota: Antes de ejecutar en dispositivo físico, pueden ser necesarios permisos y certificados propios de cada plataforma.

👨‍💻 Autor

Kevin Beltrán
