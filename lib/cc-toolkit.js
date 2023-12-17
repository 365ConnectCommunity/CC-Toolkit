var CC = (function () {

  function validateNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
  }

  return {

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
    },

    isLeapYear: function (year) {
      validateNumbers(year, 0);
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    },

    factorial: function (n) {
      validateNumbers(n, 0);
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * this.factorial(n - 1);
      }
    },

    isPalindrome: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
      const reversedStr = this.reverseString(cleanedStr);
      return cleanedStr === reversedStr;
    },

    fibonacci: function (n) {
      validateNumbers(n, 0);
      if (n === 0) return 0;
      if (n === 1) return 1;
      let a = 0, b = 1;
      for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
      }
      return b;
    },

    isEven: function (num) {
      validateNumbers(num, 0);
      return num % 2 === 0;
    },

    isOdd: function (num) {
      validateNumbers(num, 0);
      return num % 2 !== 0;
    },

    maxArray: function (arr) {
      if (!Array.isArray(arr) || arr.length === 0 || arr.some(isNaN)) {
        throw new Error('Argument must be a non-empty array of numbers');
      }
      return Math.max(...arr);
    },

    minArray: function (arr) {
      if (!Array.isArray(arr) || arr.length === 0 || arr.some(isNaN)) {
        throw new Error('Argument must be a non-empty array of numbers');
      }
      return Math.min(...arr);
    },

    power: function (base, exponent) {
      validateNumbers(base, exponent);
      return Math.pow(base, exponent);
    },

    squareRoot: function (num) {
      validateNumbers(num, 0);
      return Math.sqrt(num);
    },

    isPerfectSquare: function (num) {
      validateNumbers(num, 0);
      const sqrt = Math.sqrt(num);
      return sqrt === Math.floor(sqrt);
    },

    getSign: function (num) {
      validateNumbers(num, 0);
      return Math.sign(num);
    },

    roundToDecimalPlaces: function (num, decimalPlaces) {
      validateNumbers(num, decimalPlaces);
      return parseFloat(num.toFixed(decimalPlaces));
    },

    getRandomBoolean: function () {
      return Math.random() < 0.5;
    },

    shuffleArray: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      const shuffledArray = [...arr];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    },

    circleArea: function (radius) {
      validateNumbers(radius, 0);
      return Math.PI * Math.pow(radius, 2);
    },

    degreesToRadians: function (degrees) {
      validateNumbers(degrees, 0);
      return degrees * (Math.PI / 180);
    },

    radiansToDegrees: function (radians) {
      validateNumbers(radians, 0);
      return radians * (180 / Math.PI);
    },

    randomIntegerInRange: function (min, max) {
      validateNumbers(min, max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    isCenturyYear: function (year) {
      validateNumbers(year, 0);
      return year % 100 === 0;
    },

    hypotenuse: function (a, b) {
      validateNumbers(a, b);
      return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    },

    isPerfectCube: function (num) {
      validateNumbers(num, 0);
      const cubeRoot = Math.cbrt(num);
      return cubeRoot === Math.floor(cubeRoot);
    },

    celsiusToFahrenheit: function (celsius) {
      validateNumbers(celsius, 0);
      return (celsius * 9/5) + 32;
    },

    // New Functions

    // Function to convert a temperature from Fahrenheit to Celsius
    fahrenheitToCelsius: function (fahrenheit) {
      validateNumbers(fahrenheit, 0);
      return (fahrenheit - 32) * 5/9;
    },

    // Function to calculate the area of a rectangle
    rectangleArea: function (length, width) {
      validateNumbers(length, width);
      return length * width;
    },

    // Function to calculate the perimeter of a rectangle
    rectanglePerimeter: function (length, width) {
      validateNumbers(length, width);
      return 2 * (length + width);
    },

    // Function to check if a number is an Armstrong number
    isArmstrongNumber: function (num) {
      validateNumbers(num, 0);
      const numStr = num.toString();
      const numDigits = numStr.length;
      let sum = 0;
      for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), numDigits);
      }
      return sum === num;
    },

    // Function to check if a number is a palindrome in binary representation
    isBinaryPalindrome: function (num) {
      validateNumbers(num, 0);
      const binaryRepresentation = num.toString(2);
      return this.isPalindrome(binaryRepresentation);
    },

    // Function to calculate the nth triangular number
    triangularNumber: function (n) {
      validateNumbers(n, 0);
      return (n * (n + 1)) / 2;
    },

    // Function to calculate the nth pentagonal number
    pentagonalNumber: function (n) {
      validateNumbers(n, 0);
      return (n * (3 * n - 1)) / 2;
    },

    // Function to calculate the nth hexagonal number
    hexagonalNumber: function (n) {
      validateNumbers(n, 0);
      return n * (2 * n - 1);
    },

    // Add more functions as needed...
  };

})();
