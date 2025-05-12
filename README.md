# React State Management Playground

This project is a **React State Management Playground** that demonstrates and compares various client-side state management solutions in React. It is designed for learning, experimentation, and reference.

## Features

- **Multiple State Management Approaches:**
  - React Context API
  - Redux
  - Zustand
  - Jotai (including rookie and persist variants)
  - Classic React state
  - Optimized React rendering techniques
- **Modular Examples:** Each approach is implemented in its own module for easy comparison.
- **React Router Navigation:** Quickly switch between different state management demos.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to the local server address (usually `http://localhost:5173/`).

## Project Structure

```
src/
  App.jsx                # Main app with navigation
  react/                 # Classic React state example
  react-less-render/     # Optimized React rendering
  react-context/         # React Context API example
  redux/                 # Redux example
  zustand/               # Zustand example
  jotai/                 # Jotai example
  jotai-rookie/          # Jotai rookie example
  jotai-persist/         # Jotai persist example
```

## License

MIT
