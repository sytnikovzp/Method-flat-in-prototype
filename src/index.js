'use strict';

// Pseudocode Flat

// array.flat(depth);
// if(isMyArray(arr[i]) && depth > 0){
//     result = result.concat(arr[i].flat(depth - 1))
// } else if {
//     (arr[i] !== undefined){
//       result.push(arr[i]);
//     }
//   return result;
// }

function MyArray(...args) {
  this.length = args.length;
  if (args.length) {
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
  }
}

function isMyArray(obj) {
  return obj instanceof MyArray;
}

MyArray.prototype = new MyArrayProto();

function MyArrayProto() {
  // push
  this.push = function () {
    if (arguments) {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
    }
    return this.length;
  };

  // forEach
  this.forEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  };

  // concat
  this.concat = function (...args) {
    const result = new MyArray();
    this.forEach((el) => {
      result.push(el);
    });
    for (let i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        result.push(...args[i]);
      } else if (isMyArray(args[i])) {
        for (let j = 0; j < args[i].length; j++) {
          result.push(args[i][j]);
        }
      } else {
        result.push(args[i]);
      }
    }
    return result;
  };

  // flat
  this.flat = function (depth = 1) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (isMyArray(this[i]) && depth > 0) {
        result = result.concat(this[i].flat(depth - 1));
      } else if (this[i] !== undefined) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

// Verify method
const myTestArray = new MyArray(1, 2, 3,
  new MyArray(4, 5, 6, 
    new MyArray('one', 'two', 'three',
      new MyArray('four', 'five', 'six')))
);

console.log(myTestArray.flat(Infinity));
