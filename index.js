/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Remote debugger is in a background tab']);

AppRegistry.registerComponent(appName, () => App);
