import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

//Ignora yellowbox
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

//apresenta page selecionada pelo routes.js
export default function App() {
  return <Routes />
}