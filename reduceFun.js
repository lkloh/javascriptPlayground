

function sumByReduce(array) {
  return array.reduce((total, num) => total + num);
}

function sumByReduceSeed(array) {
  return array.reduce((total, num) => total + num, 0);
}

function averageByReduce(array) {
  return array.reduce((total, num, index, array) => {
    total += num;
    if (index === array.length - 1) {
      return total / array.length;
    } else {
      return total;
    }
  });
}

function doubleByReduce(array) {
  return array.reduce((result, num) => {
    result.push(2 * num);
    return result;
  }, []);
}

function getOddNumbers(array) {
  return array.reduce((result, num) => {
    if (num % 2 === 1) {
      result.push(num);
    }
    return result;
  }, []);
}

function tally(collection) {
  return collection.reduce((tallyDict, item) => {
    tallyDict[item] = (tallyDict[item] || 0) + 1;
    return tallyDict;
  }, {});
}

function flatten(nestedArray) {
  return nestedArray.reduce((flattenedArray, array) => {
    return flattenedArray.concat(array);
  }, []);
}

function getUniqueColors(data) {
  return data.reduce((uniqueColors, dict) => {
    dict.c.forEach(color => {
      if (!uniqueColors.includes(color)) {
        uniqueColors.push(color);
      }
    });
    return uniqueColors;
  }, []);
}

console.log(`sum by reduce: ${sumByReduce([1, 2, 3, 4, 5])}`);
console.log(`sum by reduce with seed: ${sumByReduceSeed([1, 2, 3, 4, 5])}`);

console.log(`average by reduce: ${averageByReduce([1, 2, 3, 4, 5])}`);

console.log(`double by reduce: ${doubleByReduce([1, 2, 3, 4, 5])}`);

console.log(`odd numbers: ${getOddNumbers([1, 2, 3, 4, 5])}`);

const talliedFruits = tally(['apple', 'orange', 'orange', 'pear', 'mango', 'apple', 'avocado', 'orange', 'orange']);
console.log(talliedFruits);

const nestedArray = [[1,2,3], [4,5], [], [6,7], [8,9,10,11]];
console.log(flatten(nestedArray));

const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']},
];
console.log(getUniqueColors(data));

