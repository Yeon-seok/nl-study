var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var fs = require('fs');

router .get('/', (req, res) => {
    console.log('signup입니다.!');
})

router.post('/',(req,res)=>{
    let pw=req.body.pw;
    let pwCheck=req.body.pwCheck;
    let id=req.body.id;

    if(pw!=pwCheck)
    {
        console.log('not correct pw')
        res.write('비밀번호 확인 안됨!');
        res.end();
    }

    else
    {
        crypto.randomBytes(64, (err,result)=>{
            if(err)
            {
                console.log('pbkdf2 err : ' + err);
            }
            else
            {
                const salt = result.toString('base64');
                console.log('salt : ' + salt);
                crypto.pbkdf2(pw,salt,100000,64,'sha512',(err,result)=>{
                    if(err)
                    {
                        console.log('pbkdf2 err : ' + err);
                        res.write('pbkdf2 err : ' + err);
                        res.end();
                    }
                    else
                    {
                        console.log('hashed:' + result.toString('base64'));
                        const userData = {
                            id : id,
                            pw : result.toString('base64'),
                            salt : salt
                        }
                        
                        fs.writeFile('userData.txt',JSON.stringify(userData), (err)=>{
                            if(err) 
                            {    
                                console.log('writeFile err : ' + err);
                            }
                            else 
                            {
                                console.log('파일 저장 완료'); 
                            }
                    }

                )}
                })
            }
        })
    }})

module.exports = router;
