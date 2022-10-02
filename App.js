import React from 'react';
import Routing from './src/component/Routing';
import { Provider } from 'react-redux';
import { stores } from './src/centralStore/store'

const App = () =>  <Provider store={stores}><Routing /></Provider>;

export default App;

