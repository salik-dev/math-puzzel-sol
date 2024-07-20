// MATH-PZL to JS-CODING ( puzzle level: basic )
92+3=73
75+2=22
84+3=43
97+1=? ( 21 correct answer )

// MAKE-CUSTOM-PROGRAM-PROBLEMS ( for coding interactive ) => basic level programming

// Problem # 01:
// write a program that acccept two input numbers, if first input contain two digits then
  // first digits of input one always greate than second digit of input one then subtract first digit of input 1 with second digit of input 1
  // then concatenate with second user input

// BEFORE-SOLUTION ( best coder always write pseudo-code before write the actual problem solutions )
  // ** pseudo-codes ==> steps
    // step #01: user insert two inputs
    // step #02: validate first inputs ( contain two digits or not if yes then subtract )
    // step #03: when first digits contains two digits then subtract each other
    // step #04: concatenate with second input ( as a string )
    // step #05: Testing Result


  // C O D I N G ( I solved it in 8 minutes )
// step #01
let n1=53, n2=3;
const numValidators = (...nums) => {
  let validateNums = nums[0], response=null;
  // step #02
  const isDoubleDigits = `${validateNums}`.length>1 && nums.every((i) => Number(i));
  if(isDoubleDigits){
  validateNums = `${nums[0]}`;
    // step #03
  validateNums = validateNums[0] > validateNums[1] && validateNums[0] - validateNums[1];
    // step #04
  response = validateNums+`${nums[1]}`;
  }
  else{response = "single digit";}
  return response;
}

// step #02 invoking
const result = numValidators(n1, n2);
console.log(result);
