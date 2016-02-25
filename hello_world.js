var express = require('express')

var app = express()

app.get('/', function(req,res){
	res.send('hello world')
})

app.listen(process.argv[2])

