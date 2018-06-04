
function obfuscate(password) {

let args    =   process.argv.slice(2);
let argStr  =   args.toString();
let argArr  =   argStr.split('');

  for (let i = 0; i < argArr.length; i++) {

  if (argArr[i] === "a") {
    argArr[i] = '4';
  }

  if (argArr[i] === "e") {
    argArr[i] = '3';
  }

  if (argArr[i] === "o") {
    argArr[i] = '0';
  }

  if (argArr[i] === "l") {
    argArr[i] = '1';
  }

}

let finalPW = argArr.join('');

console.log(finalPW);

return finalPW;

}


obfuscate(process.argv.slice(2))




/*

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).

*/