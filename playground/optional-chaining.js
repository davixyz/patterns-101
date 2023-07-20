// Practice Optional Chaining
const lodash = require("lodash");

const deeplyNestedObject = {
  a: {
    b: {
      c: {
        d: {
          e: 42,
        },
      },
    },
    carlos: {
      another: "another",
    },
    truthy: 0,
  },
};

// First Legacy way of accessing deeply nested props
const another =
  deeplyNestedObject &&
  deeplyNestedObject.a &&
  deeplyNestedObject.a.carlos &&
  deeplyNestedObject.a.carlos.another;

console.log("and and", another);

// Second way of accessing deeply nested props
const another2 = lodash.get(
  deeplyNestedObject,
  "a.carlos.another",
  "default value"
);

console.log("lodash", another2);

// Third way of accessing deeply nested props
const another3 = deeplyNestedObject?.a?.truthy;

console.log("optional chaining", another3);

const objectWithFn = {
  a: function () {
    console.log("called");
  },
};

objectWithFn.a?.();

const randomArr = [1, 2, 3, 4, 5];

console.log(randomArr?.[13212431241]);
