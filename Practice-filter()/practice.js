////filter >10
const numbers = [4, 3, 23, 27, 5]

const numFilter1 = numbers.filter(num => num > 10)

console.log(numFilter1)

////more than 4 characters
const names = ['Juan', ' Ana', 'Pedro', 'Maria']

const namesFilter1 = names.filter(name => name.length > 4)
console.log(namesFilter1)

////fnum multip. of 3 && >10
const numbers2 = [2, 3, 5, 12, 18, 7, 27]

const namesFilter2 = numbers2.filter(num => (
    num % 3 == 0) && (num > 10))

console.log(namesFilter2)
