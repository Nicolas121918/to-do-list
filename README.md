📌 TareApp — Lista de tareas (Ionic + Angular)

Aplicación para gestionar tareas con categorías, prioridad, fecha de vencimiento y barra de progreso.
Construida con Ionic + Angular usando standalone components y persistencia en LocalStorage.

🚀 Tecnologías utilizadas
Tecnología	Uso
Angular 20	Lógica y estructura de la app
Ionic Framework	UI móvil y componentes
Capacitor	Integración con dispositivos Android/iOS
TypeScript / SCSS / HTML	Desarrollo frontend
LocalStorage	Persistencia de datos
✨ Funcionalidades principales

➕ Agregar y eliminar tareas

✔ Marcar tareas como completadas

🔥 Barra de progreso dinámica

🏷 Categoría y prioridad

📅 Fecha de vencimiento

🔍 Filtro de tareas por estado

🧠 Aprendizajes y buenas prácticas

Adaptación rápida al stack Ionic + Angular y su arquitectura

Uso de standalone components

Lógica desacoplada en TaskService

UX móvil con Ionic Components

Tipado y enrutamiento básico en TS/Angular

Buen manejo de estado simple con LocalStorage

🛠️ Instalación y ejecución en web
npm install
npm run start  # http://localhost:4200

📦 Compilar para producción
npm run build
npx cap sync

📱 Ejecutar en dispositivos
🔹 Android

Requisitos: Android Studio + AVD o celular con depuración USB

npm install
npm run build
npx cap sync android
npx cap open android


➡ Ejecutar desde Android Studio con Run ▶

🍎 iOS (Solo macOS)

Requisitos: Xcode + simulador o dispositivo físico

npm install
npm run build
npx cap sync ios
npx cap open ios


➡ Ejecutar en Xcode con ⌘ + R

Para dispositivos físicos pueden requerirse certificados y permisos adicionales

🌱 Futuras mejoras

Persistencia local con SQLite

Mejor feedback visual (toasts/animaciones)

Filtros más avanzados por categoría/fecha

Tests unitarios y E2E

👨‍💻 Autor

Kevin Beltrán
