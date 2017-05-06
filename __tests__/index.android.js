import 'react-native';
import React from 'react';
import Index from '../index.android.js';
import SomeComp from '../src/SomeComp';
jest.useFakeTimers()
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'

import { Text, TextInput } from 'react-native'
it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );


});

it('something', () => {
  const wrapper = mount(
    <Index />
  );
  expect(wrapper.find({ testID: 'state-text' }).text()).toBe('nothing');

  jest.runTimersToTime(1000);
  expect(wrapper.find({ testID: 'state-text' }).text()).toBe('message after first timer');

  jest.runTimersToTime(2000);
  expect(wrapper.find({ testID: 'state-text' }).text()).toBe('message after second timer');

  wrapper.find(TextInput).simulate('change', { nativeEvent: { text: 'some text' } });
  expect(wrapper.find({ testID: 'state-text' }).text()).toBe('some text');

});