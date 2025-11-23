📌 TareApp — Gestión de Tareas con Ionic + Angular

Aplicación móvil y web para gestionar tareas con una interfaz moderna, barra de progreso dinámico y almacenamiento local.
Desarrollada como prueba técnica utilizando Ionic, Angular y Capacitor.

✨ Características

✔️ Crear tareas

🔄 Marcar tareas como completadas

📊 Barra de progreso actualizada en tiempo real

💾 Guardado automático en LocalStorage

📱 Soporte para Android e iOS

🖥 Ejecutable también desde el navegador

📸 Vista Previa

 🧱 Tecnologías Utilizadas
Tecnología	Uso
Ionic + Angular	Frontend y UI Mobile
Capacitor	Integración con plataformas móviles
LocalStorage	Persistencia de datos
TypeScript	Lógica de negocio
🛠️ Instalación

Clona el proyecto:

git clone https://github.com/tu-usuario/TareApp.git
cd TareApp


Instala dependencias:

npm install

▶️ Ejecución en entorno web
npm run start


Abrir en el navegador:
👉 http://localhost:4200/

📱 Ejecución en dispositivos móviles

⚠️ Antes de ejecutar en móvil, compilar la app:

npm run build
npx cap sync

🤖 Android

Requisitos:

Android Studio instalado

Emulador configurado o dispositivo con depuración activa

Ejecutar:

npx cap open android


En Android Studio → Presionar Run ▶️

🍎 iOS (solo macOS)

Requisitos:

Xcode

Simulador o dispositivo físico

Ejecutar:

npx cap open ios


En Xcode → Presionar ⌘ + R

Para ejecutar en iPhone físico puede ser necesario configurar certificados

🚀 Mejoras futuras

Notificaciones push

Animaciones al completar tareas

Base de datos interna (SQLite)

👨‍💻 Autor

Kevin Beltrán
📍 Bogota – Colombia
Desarrollador Fullstack
