function getArrayParams(...arr) {
  //let min = arr[0];
  //let max = arr[0];
 /*for (let i of arr) {
    if (max < i) {
      max = i;
    }if (min > i) 
      min = i;
  //for (let i = 0; i < arr.length; i++){
  }*/
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let sum = arr.reduce(function(currentSum, currentNumber) {
    return currentSum + currentNumber;
  }, 0)
  let avg1 = sum / arr.length.toFixed(2);
  let avg = Number.parseFloat(avg1)
}
return { min: min, max: max, avg: avg };


function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let rezult = max - min;
  for (let i of arr) {
    if (max < i) {
      max = i;
    }
    if (min > i) {
      min = i;
    }
  }
  return {rezult};
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  //for (let i = 0; i < arr.length; i++){
  for (let element of arr){
    if (element / 2 == 0){
      sumEvenElement++
    }
    else{
      sumOddElement++
    }
    return sumEvenElement - sumOddElement;
  }
}



function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  //for (let i = 0; i < arr.length; i++) {
    for (let element of arr){
    if (element / 2 == 0) {
      sumEvenElement += element;
      countEvenElement++
    }
    return countEvenElement / sumEvenElement
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkenResult = Infinity;
  let a = 0;
  for (let i = 0; i < arrOfArr.length; i++){
    func(...i)
      return a == i;
    
    if (a > maxWorkenResult) {
      maxWorkenResult += a;
    }
}

}
