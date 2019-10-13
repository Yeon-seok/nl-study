module.exports = {
    odd:() =>{
        console.log('홀수입니다.');
     },
     even:() =>{
         console.log('짝수입니다.');
     },
     sqr:(number) =>{
         for(var result = 1, i = 0; i < number; i++ )
         {
             result = result * 2
         }
         console.log(result);
     },
     reverse:(name)=>{
         var nameReverse = name.split("").reverse().join("");
         console.log(nameReverse);
     }
}