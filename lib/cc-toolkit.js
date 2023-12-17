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

    // Function to calculate the area of a triangle
    triangleArea: function (base, height) {
      validateNumbers(base, height);
      return 0.5 * base * height;
    },

    // Function to calculate the perimeter of a triangle
    trianglePerimeter: function (side1, side2, side3) {
      validateNumbers(side1, side2);
      validateNumbers(side2, side3);
      validateNumbers(side3, side1);
      return side1 + side2 + side3;
    },

    // Function to check if a number is a perfect number
    isPerfectNumber: function (num) {
      validateNumbers(num, 0);
      if (num <= 1) return false;
      let sum = 1;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          sum += i;
          if (i !== num / i) {
            sum += num / i;
          }
        }
      }
      return sum === num;
    },

    // Function to calculate the greatest common divisor (GCD) of two numbers
    gcd: function (a, b) {
      validateNumbers(a, b);
      a = Math.abs(a);
      b = Math.abs(b);
      while (b) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    },

    // Function to calculate the least common multiple (LCM) of two numbers
    lcm: function (a, b) {
      validateNumbers(a, b);
      return Math.abs(a * b) / this.gcd(a, b);
    },

    // Function to check if a year is a leap year in the Gregorian calendar
    isGregorianLeapYear: function (year) {
      validateNumbers(year, 0);
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    },

    // Function to calculate the area of a parallelogram
    parallelogramArea: function (base, height) {
      validateNumbers(base, height);
      return base * height;
    },

    // Function to calculate the perimeter of a parallelogram
    parallelogramPerimeter: function (side1, side2) {
      validateNumbers(side1, side2);
      return 2 * (side1 + side2);
    },

    // Function to calculate the area of a trapezoid
    trapezoidArea: function (base1, base2, height) {
      validateNumbers(base1, base2);
      validateNumbers(height, 0);
      return 0.5 * (base1 + base2) * height;
    },

    // Function to calculate the perimeter of a trapezoid
    trapezoidPerimeter: function (side1, side2, base1, base2) {
      validateNumbers(side1, side2);
      validateNumbers(base1, base2);
      return side1 + side2 + base1 + base2;
    },

    // Function to calculate the surface area of a cube
    cubeSurfaceArea: function (side) {
      validateNumbers(side, 0);
      return 6 * Math.pow(side, 2);
    },

    // Function to calculate the volume of a cube
    cubeVolume: function (side) {
      validateNumbers(side, 0);
      return Math.pow(side, 3);
    },

    // Function to calculate the surface area of a cylinder
    cylinderSurfaceArea: function (radius, height) {
      validateNumbers(radius, height);
      return 2 * Math.PI * radius * (radius + height);
    },

    // Function to calculate the volume of a cylinder
    cylinderVolume: function (radius, height) {
      validateNumbers(radius, height);
      return Math.PI * Math.pow(radius, 2) * height;
    },

    // Function to calculate the surface area of a cone
    coneSurfaceArea: function (radius, slantHeight) {
      validateNumbers(radius, slantHeight);
      return Math.PI * radius * (radius + slantHeight);
    },

    // Function to calculate the volume of a cone
    coneVolume: function (radius, height) {
      validateNumbers(radius, height);
      return (1/3) * Math.PI * Math.pow(radius, 2) * height;
    },

    // Function to calculate the surface area of a sphere
    sphereSurfaceArea: function (radius) {
      validateNumbers(radius, 0);
      return 4 * Math.PI * Math.pow(radius, 2);
    },

    // Function to calculate the volume of a sphere
    sphereVolume: function (radius) {
      validateNumbers(radius, 0);
      return (4/3) * Math.PI * Math.pow(radius, 3);
    },

    // Function to calculate the surface area of a rectangular prism
    rectangularPrismSurfaceArea: function (length, width, height) {
      validateNumbers(length, width);
      validateNumbers(width, height);
      return 2 * (length * width + length * height + width * height);
    },

    // Function to calculate the volume of a rectangular prism
    rectangularPrismVolume: function (length, width, height) {
      validateNumbers(length, width);
      validateNumbers(width, height);
      return length * width * height;
    },
        
    pyramidSurfaceArea: function (baseArea, slantHeight) {
      validateNumbers(baseArea, slantHeight);
      return baseArea + 0.5 * this.trianglePerimeter(baseArea, slantHeight, slantHeight);
    },

    // Function to calculate the volume of a pyramid
    pyramidVolume: function (baseArea, height) {
      validateNumbers(baseArea, height);
      return (1/3) * baseArea * height;
    },

    // Function to calculate the surface area of a torus (doughnut)
    torusSurfaceArea: function (majorRadius, minorRadius) {
      validateNumbers(majorRadius, minorRadius);
      return 4 * Math.PI * Math.pow(majorRadius, 2);
    },

    // Function to calculate the volume of a torus (doughnut)
    torusVolume: function (majorRadius, minorRadius) {
      validateNumbers(majorRadius, minorRadius);
      return 2 * Math.PI * Math.pow(majorRadius, 2) * minorRadius;
    },

    // Function to calculate the factorial of a non-negative integer
    factorial: function (n) {
      validateNumbers(n, 0);
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * this.factorial(n - 1);
      }
    },

    // Function to calculate the double factorial of a non-negative integer
    doubleFactorial: function (n) {
      validateNumbers(n, 0);
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * this.doubleFactorial(n - 2);
      }
    },

    // Function to calculate the gamma function of a positive real number
    gammaFunction: function (x) {
      if (typeof x !== 'number' || x <= 0) {
        throw new Error('Argument must be a positive real number');
      }
      // Implementation of the gamma function can be added here
      // For simplicity, let's use the factorial function for now
      return this.factorial(x - 1);
    },

    // Function to calculate the natural logarithm of a number
    naturalLogarithm: function (x) {
      validateNumbers(x, 0);
      return Math.log(x);
    },

    // Function to calculate the base-10 logarithm of a number
    log10: function (x) {
      validateNumbers(x, 0);
      return Math.log10(x);
    },

    // Function to calculate the exponentiation of a number to the base e
    exp: function (x) {
      validateNumbers(x, 0);
      return Math.exp(x);
    },

    // Function to calculate the sine of an angle in radians
    sin: function (x) {
      validateNumbers(x, 0);
      return Math.sin(x);
    },

    // Function to calculate the cosine of an angle in radians
    cos: function (x) {
      validateNumbers(x, 0);
      return Math.cos(x);
    },

    // Function to calculate the tangent of an angle in radians
    tan: function (x) {
      validateNumbers(x, 0);
      return Math.tan(x);
    },

    // Function to calculate the inverse sine of a number
    asin: function (x) {
      validateNumbers(x, -1, 1);
      return Math.asin(x);
    },

    // Function to calculate the inverse cosine of a number
    acos: function (x) {
      validateNumbers(x, -1, 1);
      return Math.acos(x);
    },

    // Function to calculate the inverse tangent of a number
    atan: function (x) {
      validateNumbers(x, 0);
      return Math.atan(x);
    },

    // Function to convert a number from degrees to radians
    degreesToRadians: function (degrees) {
      validateNumbers(degrees, 0);
      return degrees * (Math.PI / 180);
    },

    // Function to convert a number from radians to degrees
    radiansToDegrees: function (radians) {
      validateNumbers(radians, 0);
      return radians * (180 / Math.PI);
    },

    // Function to calculate the absolute value of a number
    abs: function (x) {
      validateNumbers(x, 0);
      return Math.abs(x);
    },

    // Function to calculate the floor of a number
    floor: function (x) {
      validateNumbers(x, 0);
      return Math.floor(x);
    },

    // Function to calculate the ceiling of a number
    ceil: function (x) {
      validateNumbers(x, 0);
      return Math.ceil(x);
    },

    // Function to round a number to the nearest integer
    round: function (x) {
      validateNumbers(x, 0);
      return Math.round(x);
    },

    // Function to check if a number is NaN (Not a Number)
    isNaN: function (x) {
      return isNaN(x);
    },

    // Function to check if a number is finite
    isFinite: function (x) {
      return isFinite(x);
    },

    // Function to convert a string to an integer
    parseInt: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return parseInt(str);
    },

    // Function to convert a string to a floating-point number
    parseFloat: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return parseFloat(str);
    },
    generateRandomColor: function () {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },

    // Function to convert a color from hexadecimal to RGB format
    hexToRgb: function (hex) {
      if (typeof hex !== 'string' || !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
        throw new Error('Invalid hexadecimal color code');
      }
      let r, g, b;
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
      }
      return { r, g, b };
    },

    // Function to convert RGB values to a hexadecimal color code
    rgbToHex: function (r, g, b) {
      validateNumbers(r, g);
      validateNumbers(g, b);
      return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
    },

    // Function to calculate the Hamming distance between two strings
    hammingDistance: function (str1, str2) {
      if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new Error('Both arguments must be strings');
      }
      if (str1.length !== str2.length) {
        throw new Error('String lengths must be equal');
      }
      let distance = 0;
      for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
          distance++;
        }
      }
      return distance;
    },

    // Function to generate a random password
    generateRandomPassword: function (length = 12) {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
      return password;
    },

    // Function to check if a string is a valid email address
    isValidEmail: function (email) {
      if (typeof email !== 'string') {
        throw new Error('Argument must be a string');
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    // Function to check if a string is a palindrome (ignoring spaces and case)
    isPalindromeIgnoreCase: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const reversedStr = this.reverseString(cleanedStr);
      return cleanedStr === reversedStr;
    },

    // Function to generate a UUID (Universally Unique Identifier)
    generateUUID: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },

    // Function to check if a string contains only alphabetic characters
    isAlphabetic: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return /^[A-Za-z]+$/.test(str);
    },

    // Function to check if a string contains only alphanumeric characters
    isAlphanumeric: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return /^[0-9A-Za-z]+$/.test(str);
    },

    // Function to check if a string contains only numeric characters
    isNumeric: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return /^[0-9]+$/.test(str);
    },

    // Function to capitalize the first letter of each word in a string
    capitalizeWords: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
      });
    },

    // Function to convert a string to title case
    toTitleCase: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return str.replace(/\b\w+/g, function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
    },

    // Function to truncate a string to a specified length and append an ellipsis
    truncateString: function (str, maxLength) {
      if (typeof str !== 'string' || typeof maxLength !== 'number' || maxLength < 0) {
        throw new Error('Invalid arguments');
      }
      return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    },
    deepClone: function (obj) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }

      if (obj instanceof Date) {
        return new Date(obj.getTime());
      }

      if (obj instanceof Array) {
        const newArr = [];
        for (let i = 0; i < obj.length; i++) {
          newArr[i] = this.deepClone(obj[i]);
        }
        return newArr;
      }

      if (obj instanceof Object) {
        const newObj = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            newObj[key] = this.deepClone(obj[key]);
          }
        }
        return newObj;
      }
    },

    // Function to shuffle the characters in a string
    shuffleString: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      const strArray = str.split('');
      for (let i = strArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
      }
      return strArray.join('');
    },

    // Function to count the occurrences of each character in a string
    countCharacters: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      const charCount = {};
      for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
      return charCount;
    },

    // Function to convert a string to a slug (URL-friendly format)
    toSlug: function (str) {
      if (typeof str !== 'string') {
        throw new Error('Argument must be a string');
      }
      return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-');
    },

    // Function to calculate the distance between two points in 2D space
    distanceBetweenPoints: function (x1, y1, x2, y2) {
      validateNumbers(x1, y1);
      validateNumbers(x2, y2);
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    },

    // Function to check if a year is a leap year in the Julian calendar
    isJulianLeapYear: function (year) {
      validateNumbers(year, 0);
      return year % 4 === 0;
    },

    // Function to calculate the area of a square
    squareArea: function (side) {
      validateNumbers(side, 0);
      return Math.pow(side, 2);
    },

    // Function to calculate the perimeter of a square
    squarePerimeter: function (side) {
      validateNumbers(side, 0);
      return 4 * side;
    },

    // Function to calculate the area of an ellipse
    ellipseArea: function (majorAxis, minorAxis) {
      validateNumbers(majorAxis, minorAxis);
      return Math.PI * majorAxis * minorAxis;
    },

    // Function to calculate the perimeter of an ellipse (approximation)
    ellipsePerimeter: function (majorAxis, minorAxis) {
      validateNumbers(majorAxis, minorAxis);
      // Approximation using Ramanujan's formula
      const h = Math.pow(majorAxis - minorAxis, 2) / Math.pow(majorAxis + minorAxis, 2);
      return Math.PI * (majorAxis + minorAxis) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
    },

    // Function to check if a number is a power of two
    isPowerOfTwo: function (num) {
      validateNumbers(num, 0);
      return (num & (num - 1)) === 0;
    },

    // Function to generate a range of numbers
    generateNumberRange: function (start, end, step = 1) {
      validateNumbers(start, end, step);
      const range = [];
      for (let i = start; i <= end; i += step) {
        range.push(i);
      }
      return range;
    },

    // Function to calculate the area of a regular polygon
    regularPolygonArea: function (sideLength, numSides) {
      validateNumbers(sideLength, numSides);
      return (numSides * Math.pow(sideLength, 2)) / (4 * Math.tan(Math.PI / numSides));
    },
    reverseArray: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      return arr.reverse();
    },

    // Function to sort an array of numbers in ascending order
    sortAscending: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      return arr.slice().sort((a, b) => a - b);
    },

    // Function to sort an array of numbers in descending order
    sortDescending: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      return arr.slice().sort((a, b) => b - a);
    },

    // Function to find the maximum element in an array
    findMax: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      return Math.max(...arr);
    },

    // Function to find the minimum element in an array
    findMin: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      return Math.min(...arr);
    },

    // Function to calculate the mean (average) of an array of numbers
    calculateMean: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      return arr.reduce((sum, num) => sum + num, 0) / arr.length;
    },

    // Function to calculate the median of an array of numbers
    calculateMedian: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      const sortedArr = this.sortAscending(arr);
      const length = sortedArr.length;
      const middle = Math.floor(length / 2);
      return length % 2 === 0
        ? (sortedArr[middle - 1] + sortedArr[middle]) / 2
        : sortedArr[middle];
    },

    // Function to calculate the mode of an array of numbers
    calculateMode: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      const frequencyMap = {};
      arr.forEach((num) => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      });
      let mode = [];
      let maxFrequency = 0;
      for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
          mode = [parseInt(num)];
          maxFrequency = frequencyMap[num];
        } else if (frequencyMap[num] === maxFrequency) {
          mode.push(parseInt(num));
        }
      }
      return mode.length === Object.keys(frequencyMap).length ? [] : mode;
    },

    // Function to calculate the standard deviation of an array of numbers
    calculateStandardDeviation: function (arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array');
      }
      const mean = this.calculateMean(arr);
      const squaredDifferences = arr.map((num) => Math.pow(num - mean, 2));
      const variance = this.calculateMean(squaredDifferences);
      return Math.sqrt(variance);
    },

    // Function to calculate the factorial of a non-negative integer
    factorial: function (n) {
      validateNumbers(n, 0);
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * this.factorial(n - 1);
      }
    },

    // Function to calculate the double factorial of a non-negative integer
    doubleFactorial: function (n) {
      validateNumbers(n, 0);
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * this.doubleFactorial(n - 2);
      }
    },

    // Function to calculate the gamma function of a positive real number
    gammaFunction: function (x) {
      if (typeof x !== 'number' || x <= 0) {
        throw new Error('Argument must be a positive real number');
      }
      // Implementation of the gamma function can be added here
      // For simplicity, let's use the factorial function for now
      return this.factorial(x - 1);
    },
    isPrime: function (num) {
      validateNumbers(num, 0);
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    },

    // Function to generate prime numbers up to a specified limit using the Sieve of Eratosthenes
    generatePrimes: function (limit) {
      validateNumbers(limit, 0);
      const primes = [];
      const sieve = Array(limit + 1).fill(true);
      sieve[0] = sieve[1] = false;
      for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
          for (let j = i * i; j <= limit; j += i) {
            sieve[j] = false;
          }
        }
      }
      for (let i = 2; i <= limit; i++) {
        if (sieve[i]) {
          primes.push(i);
        }
      }
      return primes;
    },

    // Function to perform matrix addition
    matrixAddition: function (matrix1, matrix2) {
      if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
        throw new Error('Arguments must be matrices (2D arrays)');
      }
      if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error('Matrices must have the same dimensions for addition');
      }
      const result = [];
      for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[0].length; j++) {
          row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
      }
      return result;
    },

    // Function to perform matrix multiplication
    matrixMultiplication: function (matrix1, matrix2) {
      if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
        throw new Error('Arguments must be matrices (2D arrays)');
      }
      if (matrix1[0].length !== matrix2.length) {
        throw new Error('Number of columns in the first matrix must be equal to the number of rows in the second matrix');
      }
      const result = [];
      for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix2[0].length; j++) {
          let sum = 0;
          for (let k = 0; k < matrix2.length; k++) {
            sum += matrix1[i][k] * matrix2[k][j];
          }
          row.push(sum);
        }
        result.push(row);
      }
      return result;
    },

    // Function to check if a string is an anagram of another string
    areAnagrams: function (str1, str2) {
      if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new Error('Both arguments must be strings');
      }
      const sortedStr1 = str1.toLowerCase().split('').sort().join('');
      const sortedStr2 = str2.toLowerCase().split('').sort().join('');
      return sortedStr1 === sortedStr2;
    },

    // Function to convert a temperature from Celsius to Fahrenheit
    celsiusToFahrenheit: function (celsius) {
      validateNumbers(celsius);
      return (celsius * 9 / 5) + 32;
    },

    // Function to convert a temperature from Fahrenheit to Celsius
    fahrenheitToCelsius: function (fahrenheit) {
      validateNumbers(fahrenheit);
      return (fahrenheit - 32) * 5 / 9;
    },

    // Function to convert a temperature from Celsius to Kelvin
    celsiusToKelvin: function (celsius) {
      validateNumbers(celsius);
      return celsius + 273.15;
    },

    // Function to convert a temperature from Kelvin to Celsius
    kelvinToCelsius: function (kelvin) {
      validateNumbers(kelvin);
      return kelvin - 273.15;
    },

    // Function to convert a temperature from Fahrenheit to Kelvin
    fahrenheitToKelvin: function (fahrenheit) {
      validateNumbers(fahrenheit);
      return (fahrenheit + 459.67) * 5 / 9;
    },

    // Function to convert a temperature from Kelvin to Fahrenheit
    kelvinToFahrenheit: function (kelvin) {
      validateNumbers(kelvin);
      return kelvin * 9 / 5 - 459.67;
    }
  };

})();
