var CC = (function () {

  // Private helper function
  function validateNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
  }

  // Public methods
  return {

    // Mathematical operations
    add: function (a, b) {
      validateNumbers(a, b);
      return a + b;
    },

    subtract: function (a, b) {
      validateNumbers(a, b);
      return a - b;
    },

    multiply: function (a, b) {
      validateNumbers(a, b);
      return a * b;
    },

    divide: function (a, b) {
      validateNumbers(a, b);
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    },

    // String manipulation
    reverseString: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return str.split('').reverse().join('');
    },

    capitalize: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // Array manipulation
    sumArray: function (arr) {
      if (!Array.isArray(arr) || arr.some(isNaN)) {
        throw new Error('Argument must be an array of numbers');
      }
      return arr.reduce((sum, num) => sum + num, 0);
    },

    averageArray: function (arr) {
      if (!Array.isArray(arr) || arr.some(isNaN)) {
        throw new Error('Argument must be an array of numbers');
      }
      if (arr.length === 0) {
        throw new Error('Array must not be empty');
      }
      return this.sumArray(arr) / arr.length;
    },

    // Other operations
    generateRandomNumber: function (min, max) {
      validateNumbers(min, max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    isPrime: function (num) {
      validateNumbers(num, 0);
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }

    // Add more functions as needed...
  };

})();
