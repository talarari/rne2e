import 'babel-polyfill'
import React from 'react';
import 'react-native-mock-render/mock'
global.fetch = require('node-fetch')
const JSDOM = require('jsdom').JSDOM;
const dom = new JSDOM(``);
global.document = dom.window.document;
global.window = dom.window;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
    }
});

import { mount } from 'enzyme'
import SomeComp from '../src/SomeComp'
import toJson from 'enzyme-to-json';

describe('index', async () => {
    it('should do something', async () => {
        const wrapper = mount(
            <SomeComp />
        );

        const animatedShow = wrapper.findWhere(x => x.prop('testID') === 'animated-text-1').last();
        console.log(animatedShow.prop('style'))
        await delay(100)
        console.log(animatedShow.prop('style'))
        await delay(2000)
        console.log(animatedShow.prop('style'))


    })
})


async function delay(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => res(), ms)
    })
}