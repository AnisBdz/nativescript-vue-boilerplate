var express = require('express')
var app = express()

const PORT = 3333

app.get('/', function (req, res) {
	res.status(401)
	res.end('')
	// res.send('Hello World!')
})

app.listen(PORT, function () {
	console.log(`mock api listening on port ${PORT}!`);
})
