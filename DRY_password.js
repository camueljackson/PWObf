let args    =   process.argv.slice(2);
let argArr  =   args.toString().split('')

function obfuscate(password) {

  for (let i = 0; i < argArr.length; i++) {

   switch (argArr[i]) {

     case 'a':
     argArr[i] = '4';
     break;

     case 'e':
     argArr[i] = '3';
     break;

     case 'o':
     argArr[i] = '0';
     break;

     case 'l':
     argArr[i] = '1';
     break;

   }

 }
 let finalPW = argArr.join('');
 console.log(finalPW);
 return finalPW;
}

obfuscate(process.argv.slice(2))