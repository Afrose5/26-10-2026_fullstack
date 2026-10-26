const arr=[3,4,5,6,7,8,9];
console.log(arr);
const newArr=arr.map((x)=>x*2);
console.log(newArr);
const newArr1=arr.filter((x)=>x%2==0);
console.log(newArr1);
const newArr2=arr.reduce((sum,x)=>sum+x,0);
console.log(newArr2);