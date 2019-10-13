const moduleArr = [7, 2, "Hello World", 11, "node", "server", 8, 1];

const module1 = require('./lec02.js')

var Search = () => {
    for(var i = 0; i < moduleArr.length;  i++){
        if (moduleArr[i] % 2 != 0 && typeof(moduleArr[i]) == 'number')
        {
            module1.odd();
        }
        else if (moduleArr[i] %  2 ==0 && typeof(moduleArr[i]) == 'number')
        {
            module1.even();
            module1.sqr(moduleArr[i]);
        }   
        else
        {
            module1.reverse(moduleArr[i]);
        }
    }
}
console.log(typeof(2));
console.log(typeof('node'));
Search();
