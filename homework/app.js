var express = require('express');
var app = express();
var bodyParser = require(body-parser);

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/body', (req, res)=> {
    res.render('index')
})
// app.get('/:title', function(req, res){
//     res.render('index.html');{

//     }
        

        
    })


app.listen(4000, () =>{
    console.log('this is listing 4000')
})