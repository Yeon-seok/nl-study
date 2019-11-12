var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var fs = require('fs');

router .get('/', (req, res) => {
    console.log('signin입니다.!');
})

router.post('/',(req,res)=>{
    let pw=req.body.pw;
    let id=req.body.id;


    fs.readFile('userData.txt', (err,result)=>
    {
        if(err)
        {
            console.log('readFile err : ' + err);
        }
        else
        {
            const obj=JSON.parse(result);
            console.log(obj);
            crypto.pbkdf2(pw,obj.salt,100000,64,'sha512',(err,result)=>{
                if(err)
                {
                    console.log('pbkdf2 err : ' + err);
                    res.write('pbkdf2 err : ' + err);
                    res.end();
                }
                else
                {   
                    const hashedPw=result.toString('base64');
                    console.log(hashedPw);
                    if((id==obj.id)&&(hashedPw==obj.pw))
                    {
                        console.log('로그인!');
                        res.write('로그인!');
                        res.end()
                    }
                    else
                    {
                        console.log('로그인 실패!');
                        res.write('로그인 실패!');
                        res.end();
                    }
                }
            })
        }
    })
})

module.exports = router;
