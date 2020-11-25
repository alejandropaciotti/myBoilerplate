import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import Test from './index';

storiesOf('Components | Test', module)
  .addDecorator(withKnobs)
  .add('testsito', () => <Test text={'estamos probando'} />)
