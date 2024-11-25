const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engiene', 'ejs');
app.set('views', path.join(__dirname,'/views'));



app.get('/', function(req, res) {
    res.render('home.ejs');
})

app.get('/id' , (req, res) => {
    const { username } = req.query;
    console.log(username)
    res.send(username);
})

// app.get('/id/:username', (req, res) => {
//     const { username } = req.params;
//     console.log('Username:', username);
//     res.send(`Received username: ${username}`);
// });

app.listen(port, () => {
    console.log(`app is listening on port : ${port}`);
})