import 'react-native';
import React from 'react';
import Index from '../index.android.js';
import SomeComp from '../src/SomeComp';
jest.useFakeTimers()
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow,mount } from 'enzyme'

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
   console.log('1',wrapper.find(Text).text());
   console.log('2',wrapper.find(Text).text());

 jest.runAllTimers();

   console.log('3',wrapper.find(Text).text());

  wrapper.find(TextInput).simulate('change', {nativeEvent: {text: 'tal'}});
  // jest.runAllTicks()
   console.log('4',wrapper.find(Text).text());

});