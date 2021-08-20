# react-admin-core

## Usage

### ES6

#### package.json
```json
{
    "...": "...",
    "dependencies": {
        "...": "...",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-router-dom": "^5.2.0",
        "@ohoareau/apollo-client-jwt": "^0.1.5",
        "@genstackio/react-admin-core": "^0.3.48",
        "@genstackio/react-admin-ui": "^0.8.55",
        "@genstackio/react-contexts": "^0.1.5",
        "@material-ui/core": "^4.11.4",
        "tailwindcss": "^2.2.7",
        "autoprefixer": "^10.2.6",
        "postcss": "^8.2.12",
        "postcss-import": "^14.0.2",
        "@fortawesome/fontawesome-svg-core": "^1.2.35",
        "@fortawesome/free-brands-svg-icons": "^5.15.3",
        "@fortawesome/free-regular-svg-icons": "^5.15.3",
        "@fortawesome/free-solid-svg-icons": "^5.15.3",
        "@fortawesome/react-fontawesome": "^0.1.14",
        "react-cropper": "^2.1.8",
        "react-full-screen": "^1.0.2"
    }
}
```
#### tailwind.config.js
```js
module.exports = {
  mode: 'jit',
  purge: {
      content: [
          './src/**/*.jsx', // change to directory of your source files
          './src/**/*.js',  // change to directory of your source files
          './node_modules/@genstackio/react-admin-core/lib/**/*.js',
          './node_modules/@genstackio/react-admin-ui/lib/**/*.js',
          './node_modules/@genstackio/react-admin-contexts/lib/**/*.js',
      ],
    options: {
      safelist: {
        standard: [/^theme-/],
      }
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  presets: [
    require('@genstackio/react-admin-core/tailwind.config'),
  ],
}
```
#### src/App.jsx
```jsx
import '@genstackio/react-admin-core/assets/css/styles.css';
import {BaseApp, useApp} from '@genstackio/react-admin-core';

config = {}; // config

function App() {
    return <BaseApp {...useApp(config)} />;
}

export default App
```
### Typescript + CRA

#### package.json
```json
{
    "name": "admin",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/dom": "^7.31.2",
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-scripts": "^4.0.3",
        "web-vitals": "^0.2.4",
        "@material-ui/core": "^4.11.4",
        "tailwindcss": "npm:@tailwindcss/postcss7-compat",
        "prop-types": "^15.7.2",
        "autoprefixer": "^9.8.6",
        "postcss": "^7.0.35",
        "postcss-import": "^12.0.1",
        "typescript": "^4.3.2",
        "@types/node": "^15.12.2",
        "@types/react-dom": "^17.0.7",
        "@types/jest": "^26.0.23",
        "@craco/craco": "^6.1.2",
        "react-router-dom": "^5.2.0",
        "@types/react-router-dom": "^5.1.7",
        "@ohoareau/apollo-client-jwt": "^0.1.5",
        "@genstackio/react-admin-core": "^0.3.48",
        "@genstackio/react-admin-ui": "^0.8.41",
        "@genstackio/react-contexts": "^0.2.16",
        "@genstackio/craco-plugin-genstackio": "^0.3.1",
        "@fortawesome/fontawesome-svg-core": "^1.2.35",
        "@fortawesome/free-brands-svg-icons": "^5.15.3",
        "@fortawesome/free-regular-svg-icons": "^5.15.3",
        "@fortawesome/free-solid-svg-icons": "^5.15.3",
        "@fortawesome/react-fontawesome": "^0.1.14",
        "react-full-screen": "^1.0.2",
        "react-cropper": "^2.1.8"
    },
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
```
#### tailwind.config.js
```js
module.exports = {
  mode: 'jit',
  purge: {
      content: [
          './src/**/*.tsx',
          './src/**/*.ts',
          './node_modules/@genstackio/react-admin-core/lib/**/*.js',
          './node_modules/@genstackio/react-admin-ui/lib/**/*.js',
          './node_modules/@genstackio/react-admin-contexts/lib/**/*.js',
      ],
    options: {
      safelist: {
        standard: [/^theme-/],
      }
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  presets: [
    require('@genstackio/react-admin-core/tailwind.config'),
  ],
}
```
#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```
#### craco.config.js
```js
const genstackio = require('@genstackio/craco-plugin-genstackio');

module.exports = {
    plugins: [
        genstackio,
    ],
    style: {
        postcss: {
            plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}
```
#### src/index.tsx
```tsx
import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
#### src/App.tsx
```tsx
import '@genstackio/react-admin-core/assets/css/styles.css';
import {BaseApp, useApp} from '@genstackio/react-admin-core';

const config = {}; // config

function App() {
    return <BaseApp {...useApp(config)} />;
}

export default App
```
