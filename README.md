# Sistema de Gestión de Medicamentos Farmapatria

El Sistema de Gestión de Medicamentos Farmapatria es una aplicación web integral para gestionar datos de pacientes, solicitudes de medicamentos, inventario y tareas administrativas en un entorno de atención médica.

Este proyecto está construido utilizando React y TypeScript, proporcionando una solución robusta y escalable para que los proveedores de salud optimicen sus procesos de gestión de medicamentos. El sistema ofrece funcionalidades para el registro de pacientes, solicitudes de medicamentos, gestión de inventario y controles administrativos.

## Estructura del Repositorio

El repositorio está organizado de la siguiente manera:

- `src/`: Contiene el código fuente principal de la aplicación
  - `components/`: Componentes React reutilizables
  - `context/`: Proveedores de contexto React para la gestión del estado global
  - `hooks/`: Hooks personalizados de React
  - `page/`: Componentes para diferentes páginas/rutas en la aplicación
  - `style/`: Estilos globales y módulos CSS
- `public/`: Activos estáticos y plantilla HTML
- Archivos de configuración:
  - `eslint.config.js`: Configuración de ESLint
  - `tsconfig.json`: Configuración de TypeScript
  - `vite.config.ts`: Configuración de la herramienta de construcción Vite

Archivos clave:

- `src/main.tsx`: Punto de entrada de la aplicación
- `src/App.tsx`: Componente principal de la aplicación
- `src/page/userAdmin/UserAdmin.tsx`: Componente del panel de administración

## Instrucciones de Uso

### Instalación

1. Asegúrate de tener Node.js (versión 22) y pnpm instalados en tu sistema.
2. Clona el repositorio:
   ```
   git clone git@github.com:JoseFEstevesP/fron-end-farmapatria-medicamento.git
   cd farmapatria-medication-management
   ```
3. Instala las dependencias:
   ```
   pnpm install
   ```

### Ejecutar la Aplicación

Para iniciar el servidor de desarrollo:

```
pnpm run dev
```

Esto iniciará el servidor de desarrollo Vite, típicamente en `http://localhost:5173`.

### Construcción para Producción

Para crear una construcción de producción:

```
pnpm run build
```

Los archivos construidos estarán en el directorio `dist/`.

### Pruebas

Para ejecutar las pruebas:

```
pnpm run test
```

### Linting

Para ejecutar el linting del código:

```
pnpm run lint
```

## Flujo de Datos

La aplicación sigue un flujo de datos típico de React:

1. Las interacciones del usuario desencadenan eventos en los componentes React.
2. Estos eventos pueden actualizar el estado local del componente o desencadenar llamadas a la API.
3. Las llamadas a la API se realizan utilizando hooks personalizados (por ejemplo, `useGet`, `usePost`, `useUpdate`).
4. Las respuestas de la API se utilizan para actualizar el estado de la aplicación.
5. Los cambios de estado desencadenan nuevos renderizados de los componentes afectados.

```
[Interacción del Usuario] -> [Componente React] -> [Hook Personalizado] -> [Llamada API]
                                                                       -> [Actualización de Estado]
                                                                       -> [Re-renderizado de Componente]
```

La aplicación utiliza React Context para la gestión del estado global, particularmente para la autenticación de usuarios y permisos.

## Solución de Problemas

Problemas comunes y soluciones:

1. **Problema**: La aplicación no inicia

   - Asegúrate de que todas las dependencias estén instaladas: `pnpm install`
   - Verifica si hay errores de TypeScript: `pnpm run typecheck`

2. **Problema**: Las llamadas a la API fallan

   - Verifica la URL base de la API en `src/constants/apiRoutes.ts`
   - Comprueba tu conexión de red y el estado del servidor API

3. **Problema**: Los permisos no funcionan correctamente
   - Asegúrate de que el usuario haya iniciado sesión y tenga el rol correcto asignado
   - Verifica el enum `Permission` en `src/page/admin/optionsRol/enum/dataRol.ts`

Para una depuración más detallada:

1. Revisa la consola del navegador para ver mensajes de error
2. Utiliza la extensión React Developer Tools del navegador para inspeccionar el estado y las props de los componentes

## Infraestructura

La aplicación es una aplicación React del lado del cliente y requiere una API backend compatible para funcionar. La infraestructura backend no está definida en este repositorio.
