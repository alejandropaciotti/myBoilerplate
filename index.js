/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import StorybookUIRoot from './storybook';
import {name as appName} from './app.json';

const Root = process.env.STORY_BOOK ? StorybookUIRoot : App;
AppRegistry.registerComponent(appName, () => Root);
