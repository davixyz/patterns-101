// Playground for Nullish coalescing operator
const foo = null ?? "default string";
console.log(foo);

const foo2 = undefined ?? "default string";
console.log(foo2);

const obj = {
  a: 0,
};

// Old way verbose to access a property

const property =
  obj.a !== undefined || obj.a !== null ? obj.a : "default value";

console.log("old way", property);

// Nullish coalescing way

const property2 = obj.a ?? "default value";

console.log("new way", property2);

const property3 = obj.b?.c?.d ?? "default value";

const something = "";

if (something) {
  console.log("something is truthy");
}
