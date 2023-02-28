const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Hello Mostofa Kamal from Backend'
    })
})

app.listen(3000)