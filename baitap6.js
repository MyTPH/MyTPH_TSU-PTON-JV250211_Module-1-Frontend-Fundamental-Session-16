const arr1 = [1,2,3,4,5,6];
const arr2 = [10,20,30,40,50];
const arr3 = [1,3,5,7,9];

function calculateSum(arr){
    return arr.reduce((pre,current) => pre + current,0);
}
console.log("Tổng của arr1:", calculateSum(arr1));  
console.log("Tổng của arr2:", calculateSum(arr2));  
console.log("Tổng của arr3:", calculateSum(arr3));  