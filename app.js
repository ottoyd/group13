let express = require('express')
let app = express()
let port = 3000
let router = require('./routers')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))

app.use(router)

app.listen(port, () => {
    console.log('tis on port',port)
})