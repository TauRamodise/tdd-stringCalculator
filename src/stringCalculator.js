/* 

CODE EXPLANATION
replace - replaces delimiter characters in string with an empty string 
split - splits each character in the string to its own string 
parseInt - converts a string to a number

*/

function add(str) {
  let result = 0;
  let replace = str.replace(/^(\/\/.*\n)/, '');
  let split = replace.split(/[*@#%!\n\s:&,;.?><]+/g);
  
  // filter through the array and return negative numbers
  let checkLength = split.map(num => {
    if(num < 0) return num
  });

  if (str === " ") {
    return 0;
  }
  for (let i = 0; i < split.length; i++) {

    let sum = parseInt(split[i]);

    if (sum < 0) {
      
      throw 'error no negative numbers allowed ' + checkLength;
    } else 
    if(sum >= 1000){
      sum == 0
    } else {
      result += sum;
    }
  }
  return result;
}


