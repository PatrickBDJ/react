const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(number => {
    return number * 2;
});

console.log(map1);


/*
Exercise 1
  Given the strings array use the Array.prototype.map to convert the strings to numbers.
  Expected result: [1, 4, 9, 16, 25]
*/
const strings = ["1", "2", "3", "4", "5"];
// TODO: numbers = 
const numbers = strings.map(string => {
    return Number(string) * Number(string);
})
console.log(numbers);


/*
Exercise 2:
  Given the numbers array from previous exercise, use the Array.prototype.map method to square the numbers.
  Expected result = [1, 4, 9, 16, 25]
*/
// TODO: const squared = 

const squared = numbers.map(elem => {
    return Math.sqrt(elem);
})
console.log(squared);


/* 
Exercise 3:
  Going back to our lovely BMI example. 
  Given the people array, use the Array.prototype.map method, to go through these people, 
  calculate their BMI, and add the result as a attribute to the object

  BMI formula: weight/(height * height)
  
  expected result:
  [
    {name: "Mathias", height: 1.80, weight: 95, bmi: 29.3},
    {name: "Kasper", height: 1.78, weight: 85, bmi: 26.8}
  ]
*/
const people = [
  {name: "Mathias", height: 1.80, weight: 95},
  {name: "Christian", height: 1.80, weight: 80}
]

const peopleWithBmi = people.map(person => {
    person.bmi = person.weight / (person.height * person.height);
    return person;
});
console.log(peopleWithBmi);