/*
 Example of an early return from a generator function
*/

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();
console.log(generator.next());
console.log(generator.return());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

/*
 Example of two way communication with a generator function
*/

function* generateQuestions() {
  const name = yield "What is your name?";
  const age = yield "How old are you?";
  yield `Hello, ${name}! You are ${age} years old!`;
}

let generatorQuestion = generateSequence();
console.log(generatorQuestion.next());
console.log(generatorQuestion.next('John'));
console.log(generatorQuestion.next(25));
console.log(generatorQuestion.next());

/*
    Example of a generator function with infinite merge
*/

function* infiniteMergeObj() {
    let obj = {};
    while(true) {
        newObj = yield obj;
        obj = {...obj, ...newObj};
    }
}

function infiniteMergeObj2() {
    let obj = {};
    return {
        merge(newObj) {
            obj = {...obj, ...newObj};
            return {value: obj, done: false};
        }
    }
}

let generatorInfinite1 = infiniteMergeObj();
generatorInfinite1.next();
generatorInfinite1.next({a: 1});
generatorInfinite1.next({b: 2});
generatorInfinite1.next({c: 3});
console.log(generatorInfinite1.next({d: 4}));

let generatorInfinite2 = infiniteMergeObj2();
generatorInfinite2.merge({a: 1});
generatorInfinite2.merge({b: 2});
generatorInfinite2.merge({c: 3});
console.log(generatorInfinite2.merge({d: 4}));

/*
    Example of manual iteration
*/

// while(true) {
//     const {value, done} = generator.next();
//     console.log(value);
//     if (done) break;
// }
