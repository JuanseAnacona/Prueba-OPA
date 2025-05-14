# 🧭 Optimizador de Equipaje

Aplicación web desarrollada con **React** y **Bootstrap** para ayudar a excursionistas a seleccionar el conjunto óptimo de elementos que deben llevar en su mochila. El sistema asegura que se cumpla un **mínimo de calorías necesarias** y no se exceda un **peso máximo permitido**, optimizando para el **menor peso posible**.

---

## 🎯 Objetivo

Permitir al usuario:

- Ingresar el mínimo de calorías requeridas
- Ingresar el peso máximo permitido
- Ingresar una lista de elementos con peso y calorías
- Calcular y mostrar la mejor combinación posible

---

## 🧪 Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

---

## 🚀 Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/JuanseAnacona/Prueba-OPA
cd repositorio
```

### 2. Instala las dependencias

```bash
npm install
npm install react-bootstrap bootstrap
```

### 3. Ejecuta la aplicación

```bash
npm run dev
```

Abre tu navegador y visita: `http://localhost:5173`

> ⚠️ Requiere tener Node.js y Vite instalados.

---

## 🖼️ Interfaz

Formulario amigable donde el usuario puede:

- Ingresar parámetros de entrada
- Ver resultados en una tabla clara
- Recibir alertas si no hay combinación válida

---

## 📌 Formato de entrada

Los elementos deben escribirse en formato:

```
peso,calorías
peso,calorías
...
```

Ejemplo:
```
5,3
3,5
5,2
1,8
2,3
```

---

## 🧠 Lógica del Algoritmo

El sistema genera todas las combinaciones posibles de los elementos (conjunto potencia) y selecciona aquellas que:

- Tienen peso total ≤ peso máximo permitido
- Tienen calorías totales ≥ mínimo requerido

De estas, elige la de **menor peso total**.

---

## 🛠️ Escalabilidad y Mantenimiento

- Código modular, fácil de mantener y extender
- Se puede adaptar fácilmente a algoritmos más eficientes (ej. programación dinámica)
- Estructura lista para integrar backend o persistencia en localStorage

---

## 🌐 Compatibilidad

Funciona correctamente en:

- Windows, macOS, Linux (navegadores modernos)
- Chrome, Firefox, Edge, Brave

---

## 📚 Mejoras Futuras

- Exportar resultados a PDF o Excel
- Modo oscuro
- Almacenamiento en localStorage
- Agregar criterios adicionales (precio, proteínas, etc.)

---

## 🧾 Licencia

MIT © 2025

---

## 🤝 Autor

Desarrollado como parte de una prueba técnica para desarrolladores.