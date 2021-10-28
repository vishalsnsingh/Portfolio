const express = require('express');
const { homedir } = require('os');
const app = express();
const path = require('path')



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static("public"))


app.get('/', (req, res) => {
    res.render("home")
})

app.get('/home', (req, res) => {
    res.render("home")
})









app.listen(3000, () => {
    console.log('Server Running on Port 3000...')
})