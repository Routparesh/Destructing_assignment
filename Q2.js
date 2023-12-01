let val = [1,2,3,4,5,3,8,1]

let uniqArr = [... new Set(val)]

console.log(uniqArr)


//using filter
let array = [1, 2, 3, 4, 1, 2, 5];
let uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);
