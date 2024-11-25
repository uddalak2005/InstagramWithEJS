const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engiene', 'ejs');
app.set('views', path.join(__dirname,'/views'));



app.get('/', function(req, res) {
    console.log('post request accepted');
    res.render('home.ejs');
})

app.get('/id/:username' , (req, res) => {
    const { username } = req.params;
    res.send(username);
})

app.listen(port, () => {
    console.log(`app is listening on port : ${port}`);
})