const http = require('http');
const server = http.createServer((req, res) =>{
    res.writeHead(200,{'content-type' : 'text/plain '});
    res.write('Hello nodejs! ');
    res.end();
}).listen(300, () => {
console.log('serve on!');
})

