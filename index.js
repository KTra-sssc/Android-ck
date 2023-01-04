/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import Home from './screens/Home'
AppRegistry.registerComponent(appName, () => () => <Home/>);
