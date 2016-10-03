var express = require('express')
var app = express()

app.use(require('stylus').middleware('public'))
app.use(express.static('public'))

app.listen(process.argv[2] || 3000)
