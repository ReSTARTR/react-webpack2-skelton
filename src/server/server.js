var express = require('express')
var errorhandler = require('errorhandler')
var app = express()
var path = require('path')
var React = require('../../dist/assets/server')

var distDir = path.join(__dirname, '..', '..', 'dist')
app.use(express.static(distDir))

app.get('*', function(req, res, next) {
  // NOTE: https://stackoverflow.com/questions/33704714/cant-require-default-export-value-in-babel-6-x
  React.default(req, res)
})

app.use(function(req, res, next) {
  var error = new Error('Cannot ' + req.method + ' ' + req.path)
  error.status = 404;
  next(error);
})
app.use(errorhandler())

app.listen(3000, function() {
  console.log('listening on port 3000')
})

