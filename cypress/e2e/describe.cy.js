/// <reference types="cypress" />

it("external test...", () => {});

describe("Should group test...", () => {
  describe("Should group more specific tests...", () => {
    it.skip("A specific test...", () => {});
  });

  describe("Should groupe more specific tests 2...", () => {
    it("A specific test 2", () => {});
  });

  it("a internal test...", () => {});
});
