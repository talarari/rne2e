import 'react-native';
import React from 'react';
import Index from '../index.android.js';
import SomeComp from '../src/SomeComp';
// jest.useFakeTimers()
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
  jest.useRealTimers()

import { Text, TextInput } from 'react-native'
// it('renders correctly', () => {
//   const tree = renderer.create(
//     <Index />
//   );


// });

it('something', async () => {
  const tree = renderer.create(
    <Index />
  );

 
  console.log(JSON.stringify(tree.toJSON(),null,2))
  await delay(2000)
  console.log(JSON.stringify(tree.toJSON(),null,2))


});

async function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), ms)
  })
}