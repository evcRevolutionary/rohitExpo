import React from 'react';
import Routing from './src/component/Routing';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { stores } from './src/centralStore/store'
LogBox.ignoreLogs(['EventEmitter.removeListener']);
LogBox.ignoreAllLogs();

const App = () =>  <Provider store={stores}><Routing /></Provider>;

export default App;

