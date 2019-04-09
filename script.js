myArray = [5,8,11,15,18];
$(function () {
array1 = myArray.slice();
submit1 = $('.submit-1'),
input1 = $('.input-1'),
resultSum = $('.sum-1');
submit1.on('click', function () {

const val = input1.val();
const num = parseInt(val);
if (!isNaN(num)) {
array1.push(num);
const sum = array1.reduce((acc, curr) => acc + curr);
resultSum.text(sum);
input1.val('');
        }
});
newArray = [];
input3 = $('.input-3'),
submit3 = $('.submit-3'),
returnMyArray3 = $('.returnedArray-2');
submit3.on('click', function () {
const val = input3.val();
const num = parseInt(val);
if (!isNaN(num)) {
newArray = array2.filter(function(value){
return value > num;
});
if (newArray.length == 0){
returnMyArray3.text("No Element is greater than entered Number.");
}
else{
returnMyArray3.text(newArray);
}
input3.val('');
newArray = [];
}
});
array2 = myArray.slice();
newArray2 = [];
input2 = $('.input-2'),
submit2 = $('.submit-2'),
returnMyArray2 = $('.returnedArray-1');
submit2.on('click', function () {
const val = input2.val();
const num = parseInt(val);
if (!isNaN(num)) {
array2.forEach(function(value, key){
newArray2.push(value+num);
});
array2 = newArray2;
returnMyArray2.text(newArray2);
input2.val('');
newArray2 = [];
}
});
newArray = [];
input4 = $('.input-4'),
submit4 = $('.submit-4'),
returnMyArray4 = $('.returnedArray-3');
submit4.on('click', function () {
const val = input4.val();
const num = parseInt(val);
if (!isNaN(num)) {
let results = array2.map(function(value){
return (value/num);
});
newArray = results.filter(function(value){
return (value % 1 == 0);
});
newArray = newArray.map(function(value){
return value*num;
  });
if (newArray.length == 0){
returnMyArray4.text("No Element is greater than entered Number.");
}
else{
returnMyArray4.text(newArray);
}
input4.val('');
newArray = [];
}
});
});
