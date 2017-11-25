//////////////////////////////////////TASK 1
function taskDate() {
  console.log('Task 1');
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var from_year = document.querySelector("#start_year").value;
var start_year = document.querySelector("#start_year").value;
var to_year = document.querySelector("#end_year").value;
var task1Output = document.querySelector("#task1Output");
var year_count = to_year - from_year;
var output = '';
for(i=0; i<=year_count; i++){
  date = new Date(''+start_year+'-01-01');
start_year++;
  if(date.getDay() === 1){
    output += 'On '+start_year+' January is a == '+days[date.getDay()];
    output += '||Date is '+date +'\n';
     task1Output.innerText = output;
  }
}
}
//////////////////////////////////////TASK 2
function strConct() {
  var str = document.querySelector("#inputStr").value;
  var task2Output = document.querySelector("#task2Output");
  if(str.length >= 3){
    var str1 = str.slice(-3);
    var str2 = [str1, str, str1];
    var output = "".concat(...str2);
    task2Output.innerText = output;
  }else{
    var output = 'Please enter a string with length greater than 3';
    task2Output.innerText = output;
  }
}


//////////////////////////////////////TASK 3
function strCombinations() {
  var reptCom = document.querySelector("#inputStrCom").value;
  var task3Output = document.querySelector("#task3Output");
  var arrayOfStrings = reptCom.split('');
  var output = '';

  for(i=0; i<arrayOfStrings.length; i++){
    var newarr = arrayOfStrings[i];
    output += newarr +', ';
    for(j=i+1; j<arrayOfStrings.length; j++){
      newarr = newarr.concat(arrayOfStrings[j]);
      output += newarr +', ';
    }
    output += '\n';
  }
  task3Output.innerText = output;
}
//////////////////////////////////////TASK 4
function strRepeated() {
  var reptStr = document.querySelector("#inputStrRep").value;
  var task4Output = document.querySelector("#task4Output");
for(i=0; i<reptStr.length; i++){
  if(reptStr.indexOf(reptStr.charAt(i)) === reptStr.lastIndexOf(reptStr.charAt(i))){
    var output = reptStr.charAt(i);
    task4Output.innerText = 'The first not repeated character is "'+output+'"';
    break;
  }
}
}
///////////////////////////////TASK 5
function arrMerge() {
  var array1Str = document.querySelector("#array1").value;
  var array1 = array1Str.split(',');
  var array2Str = document.querySelector("#array2").value;
  var array2 = array2Str.split(',');
  var task5Output = document.querySelector("#task5Output");
var array3 = [];
var array4 = [];
array3 =  array1.concat(array2);
console.log(array3);
for(i=0; i<array3.length; i++){
  console.log(array3[i]);
    if(array4.indexOf(array3[i]) === -1){
      array4.push(array3[i]);
    }
}
console.log('array3');
console.log(array4);
task5Output.innerText = array4;
}

var array1 = [1, 2, 3, 4, 6, 3, 6];
var array2 = [2, 30, 30, 58, 6, 2, 1];
// arrMerge(array1, array2)
