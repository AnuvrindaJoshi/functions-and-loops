// q1. find number of digits in a number
let num1= 12345;
let str1= num1.toString();
let count=0;
for(let i=1;i<=str1.length;i++){
    count= count+1;
}
console.log(count);

//q2. find power of number
let num2= 2;
let pow= 3;
let newNum= 1;
for(let i=1;i<=pow;i++){
newNum= newNum *num2;
}
console.log(newNum);

//q3. reverse a number
let num3= 12345;
let str3= num3.toString();
for(let i=str3.length-1;i>=0;i--){
    console.log(str3[i])
}

//q4. convery number into its binary form
let num4= 23;
let binaryNumber= parseInt(num4.toString(2));
console.log(binaryNumber)

//q5. return sum of n natural numbers
let n=50;
let sum=0;
for(let i=1;i<=n;i++){
sum = sum+i;
}
console.log(`the sum of ${n} natural numbers is ${sum}`);

//q6.find number of digits in a number
let num6= 12345;
let str6= num1.toString();
let count6=0;
for(let i=1;i<=str6.length;i++){
    count6= count6+1;
}
console.log(count6);

//q7.calculate sum of digits in a number
let num7= 12345;
let sum7=0;
let str7= num7.toString();
for(let i=1;i<=str7.length;i++){
    sum7= sum7+i;
}
console.log(sum7);

//q8. implement selecttion sort
let ar8=[5,3,6,2,4,1];
for(let i=0;i<ar8.length-1;i++){
    let minIndex=i;
    for(let j=i+1;j<ar8.length;j++){
if(ar8[j]<ar8[minIndex]){
    minIndex=j;
}
    }
   [ ar8[i],ar8[minIndex] ]=[ ar8[minIndex],ar8[i]]
}
console.log(ar8)

//q9. factorial of a number
let num9=8;
let fact=1;
if(num9!=0){
for(let i=1;i<=num9;i++){
fact=fact*i;
}
console.log(`the factorial of ${num9} is ${fact}`)
}else{
    console.log(`the factorial of ${num9} is not present`)
}

//q10. fibonacci sequence
let numOne= 0;
let numTwo =1;
let requiredSequence = 8; //number of sequence
for(let i=1;i<=requiredSequence;i++){
    let requiredSequence= numOne+numTwo;
    numOne=numTwo;
    numTwo=requiredSequence;
    console.log(requiredSequence)
}

//q11. largest number in an array
let ar11=[1,3,4,6,23,5];
for(let i=0;i<ar11.length;i++){
    for(let j=0;j<ar11.length-i-1;j++){
         if(ar11[j] > ar11[j+1]){
             [ar11[j],ar11[j+1]]=[ar11[j+1],ar11[j]];
         }
    }
}
let largestNumInArray=ar11[ar11.length-1];
console.log(`largest number in the array is ${largestNumInArray}`);

//q12. second largest number in an array
let ar12=[10,63,14,60,23,45,5];
for(let i=0;i<ar12.length;i++){
    for(let j=0;j<ar12.length-i-1;j++){
         if(ar12[j] > ar12[j+1]){
             [ar12[j],ar12[j+1]]=[ar12[j+1],ar12[j]];
         }
    }
}
let secondLargestNumInArray=ar12[ar12.length-2];
console.log(`largest number in the array is ${secondLargestNumInArray}`);

//q13. count letters in a word
let count13= 0;
let word13='anuvrinda';
for(let i=1;i<=word13.length;i++){
    count13= count13+1;
}
console.log(count13);

//q14. find duplicate values
let a14=[1,2,3,4,1,2,5,6];
let outcome14=[];
a14.sort();
for(let i=0;i<a14.length;i++){
    if(a14[i]==a14[i+1]){
        outcome14.push(a14[i])
    }
}
console.log(outcome14);

//q15. delete occurences in array
let a15=[1,2,3,4,2,1,3,5,6];
let outcome15=[];
a15.sort();
for(let i=0;i<a15.length;i++){
   if(a15[i]!=a15[i+1]){
       outcome15.push(a15[i]);
   }
}
console.log(outcome15);

//q17. print even numbers in given array
let ar17= [1,2,3,4,5,6,7];
let finalAr17=[];
for(let i=0;i<ar17.length;i++){
    if(ar17[i]%2==0){
        finalAr17.push(ar17[i])
    }
}
console.log(finalAr17)

//q18. find product of two arrays
let ar18A= [1,2,3,4];
let ar18B= [5,6,7,8,];
let finalar18=[];
if(ar18A.length>ar18B.length){
for(let i=0;i<ar18A.length;i++){
  let  productOfArrays= ar18A[i]*ar18B[i];
finalar18.push(productOfArrays);
}
}else{
    for(let i=0;i<ar18B.length;i++){
        let  productOfArrays= ar18A[i]*ar18B[i];
      finalar18.push(productOfArrays); 
}
}
console.log(finalar18)

//q19. function that returns maximum between two numbers
function maxNums(a,b){
if(a>b){
    return a;
}else{
    return b;
}
}
console.log(maxNums(2,3));

//q20. waf that takes in array of numbers and multiplies each by two
let outcome=[];
function by2(array20){
for(let i=0;i<array20.length;i++){
let by2arr= array20[i]*2;
outcome.push(by2arr);
}
return outcome;
}
console.log(by2([1,2,3,4]))

//q21 waf that counts number of vowels in a string
let count21= 0;
function vowelsInAString(str){
for (let i=1;i<=str.length;i++){
    if(str[i]=='a' || str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u' ){
        count21= count21+1;
    }
}
return `the number of vowels in the given string are ${count21}`;
}
console.log(vowelsInAString('anuvrinda'))


