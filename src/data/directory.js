export const dirData = {
  strings:
  {
    capitalizeFirst: {
      name: 'capitalizeFirst',
      desc: 'Capitalizes the first letter of a string',
      code: '$azl.capitalizeFirst("hello World") // returns Hello World'
    },
    camelCase: {
      name: 'camelCase',
      desc: 'Converts string to camel case',
      code: '$azl.camelCase("hello, World") // returns helloWorld'

    },
    pascalCase: {
      name: 'pascalCase',
      desc: 'Converts string to pascal case',
      code: '$azl.pascalCase("hello, World") // returns HelloWorld'
    },
    snakeCase: {
      name: 'snakeCase',
      desc: 'Converts string to snake case',
      code: '$azl.snakeCase("hello, World") // returns hello_world'
    },
    truncate: {
      name: 'truncate',
      desc: 'Cuts and truncates a string and adds "..." to the end',
      code: '$azl.truncate("Hello World", 5) // returns Hello...'
    },
    countOccurrences: {
      name: 'countOccurrences',
      desc: 'Counts occurrences of a substring and returns an Number',
      code: '$azl.countOccurrences("hello hello world", "hello") // returns 2'
    },
    stringReverse: {
      name: 'stringReverse',
      desc: 'Reverses and returns the reversed string',
      code: '$azl.reverse("hello") // returns olleh'
    }
  },

  arrays: {
    shuffle: {
      name: 'shuffle',
      desc: 'Shuffles an array randomly',
      code: '$azl.shuffle([1, 2, 3, 4, 5 ]) // returns new shuffled array'
    },
    flatten: {
      name: 'flatten',
      desc: 'Flattens a 2D+ array',
      code: '$azl.flatten([1, 2, [3, 4, [5, 6]]]) // returns [1, 2, 3, 4, 5, 6]'
    },
    allOccurrences: {
      name: 'allOccurrences',
      desc: 'Counts all occurrences in an array. Returns an object',
      code: '$azl.allOccurrences([1, 1, 2, 2, 3]) // returns {1: 2, 2: 3, 3: 1}'
    },
    unique: {
      name: 'unique',
      desc: 'Returns an array with each unique occurrence in a previous array',
      code: '$azl.unique(1, 2, 2, 3, 4, 4) // returns [1, 3]'
    },
    chunk: {
      name: 'chunk',
      desc: 'Separates an array into chunks of a certain number (based on second parameter)',
      code: '$azl.chunk([1, 2, 3, 4, 5, 6, 7], 3) // returns [[1, 2, 3], [4, 5, 6], [7]]'
    },
    rotate: {
      name: 'rotate',
      desc: 'Rotates an array forwards a certain amount of times (based on second parameter)',
      code: '$azl.rotate([1, 2, 3, 4], 1) // returns [4, 1, 2, 3]'
    },
    rotateBack: {
      name: 'rotateBack',
      desc: 'Rotates an array backwards a certain amount of times (based on second parameter)',
      code: '$azl.rotateBack([1, 2, 3, 4], 1) // returns [2, 3, 4, 1]'
    }
  },

  objects: {
    objCopy: {
      name: 'objCopy',
      desc: 'Creates a deep copy of an object',
      code: '$azl.objCopy({name: "hello", occupation: "world"}) // returns {name: "hello", occupation: "world"}'
    },
    changeKeys: {
      name: 'changeKeys',
      desc: 'Changes keys of an object',
      code: '$azl.changeKeys({name: "hello", occupation: "world"}, {name: "newName", occupation: "newOccupation"}) // returns {newName: "hello", newOccupation: "world"}'
    },
    objEquality: {
      name: 'objEquality',
      desc: 'Checks if two objects are equal. Returns boolean',
      code: '$azl.capitalizeFirst({name: "hello", occupation: "world"}, {name: "hello", occupation: "world"}) // returns true'
    }
  }
}