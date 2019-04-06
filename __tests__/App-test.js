/**
 * @format
 */

import 'react-native';
import React from 'react';
import App, {SubTextContainer} from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('sub text', async () => {
  let subText = new SubTextContainer();
  expect(subText.state.subText).toBe('あばばばばば');

  await subText.changeSubText('おろろろろ');
  expect(subText.state.subText).toBe('おろろろろ');
});
