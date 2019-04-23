var express = require("express"),
    app = express()

app.use(express.static('public'))

const port = 3111
console.log('listening to port ' + port)
app.listen(port)