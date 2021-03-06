import "babel-polyfill";
import React from "react";
import "react-native-mock-render/mock";
global.fetch = require("node-fetch");
const JSDOM = require("jsdom").JSDOM;
const dom = new JSDOM(``);
global.document = dom.window.document;
global.window = dom.window;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    global[property] = document.defaultView[property];
  }
});

import { expect } from "chai";
import { mount } from "enzyme";
import SomeComp from "../src/SomeComp";
import toJson from "enzyme-to-json";

import { Text, TextInput } from "react-native";
const findByTestID = function(testId) {
  return this.findWhere(x => x.prop("testID") === testId).last();
};
describe("index", async () => {
  it("should do something", async () => {
    const wrapper = mount(<SomeComp />);

    expect(wrapper::findByTestID("state-text").text()).to.eql("nothing");
    await delay(1000);
    expect(wrapper::findByTestID("state-text").text()).to.eql(
      "message after first timer"
    );
    await delay(1000);

    expect(wrapper::findByTestID("state-text").text()).to.eql(
      "message after second timer"
    );
    expect(
      wrapper
        .find(Text)
        .filterWhere(x => x.text().includes("qui est esse"))
        .first()
        .text()
    ).to.exist;

    await delay(1000);

    wrapper::findByTestID("text-input")
      .getNode()
      .props.onChange({ nativeEvent: { text: "some text" } });

    expect(wrapper::findByTestID("state-text").text()).to.eql("some text");

    const animatedShowStyle = wrapper::findByTestID("animated-text-1").prop('style')
    expect(animatedShowStyle.opacity._value).to.eql(1)

  });
});

async function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), ms);
  });
}
