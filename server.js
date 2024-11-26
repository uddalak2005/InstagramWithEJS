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

app.get('/id/:username', (req, res) => {
    const { username } = req.params;
    console.log('Username:', username);
    const instaData = require('./data.json');
    const userData = instaData[username];
    if(userData){
        console.log(userData);
        res.render('insta.ejs', {userData: userData});
    }
    else{
        res.render('404.ejs');
    }
    
});

app.listen(port, () => {
    console.log(`app is listening on port : ${port}`);
})