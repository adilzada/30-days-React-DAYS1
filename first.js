// const arr=Array();
// const fourArrayAValues=Array(4).fill('A');
// console.log(fourArrayAValues);
// const arr=fourArrayAValues;
// console.log(arr);

const twoArrayAValues=Array(2).fill('A');
const treeArrayBValues=Array(3).fill('B');
const totalArray=twoArrayAValues.concat(treeArrayBValues);
totalArray.push('C')
// console.log(totalArray.indexOf('A'));
// console.log(totalArray.toString('  '));
// console.log(totalArray.join('  '));
totalArray.pop()
console.log(totalArray);