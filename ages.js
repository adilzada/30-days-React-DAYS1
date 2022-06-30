const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortAges=ages.sort();
console.log(sortAges)
const lastNumber=sortAges.length-1;
// console.log(lastNumber);
const minValue=sortAges[0];
const maxValue=sortAges[lastNumber];
console.log(minValue,maxValue);
let sumValues=sortAges.reduce((x, y) => x + y);
console.log("sum= " +sumValues);
let middleValue=sumValues/sortAges.length;
console.log('middleValue= '+middleValue);
const betweenMinMiddle=Math.abs(minValue-middleValue);
console.log(betweenMinMiddle.toFixed(1));
const betweenMaxMiddle=Math.abs(maxValue-middleValue);
console.log(betweenMaxMiddle.toFixed(1));