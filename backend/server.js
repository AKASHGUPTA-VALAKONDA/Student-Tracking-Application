   var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var session = require('express-session');
    var cookieParser = require('cookie-parser');
    var cors = require('cors');
    app.set('view engine', 'ejs');

    //use cors to allow cross origin resource sharing
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));




var books = [{
        "BookID": "1",
        "Title": "Book 1",
        "Author": "Author 1"
    },
    {
        "BookID": "2",
        "Title": "Book 2",
        "Author": "Author 2"
    },
    {
        "BookID": "3",
        "Title": "Book 3",
        "Author": "Author 3"
    }
]




app.get('/home', function (req, res) {
    console.log("Inside Home Login");
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    console.log("Books : ", JSON.stringify(books));
    res.end(JSON.stringify(books));

})

app.post('/create', function (req, res) {
    var newBook = {
        "BookID": req.body.BookID,
        "Title": req.body.Title,
        "Author": req.body.Author
    }
    books.push(newBook)
    console.log(books);



})

let student=[{
    "Email":agfvjhs,
    "Password":nbvdj
}]
app.get('/login',(req,res)=>{
    var newStudent={
        "Email":req.email,
        "Password":req.eassword
    }
    console.log(newStudent.Email);
    console.log(newStudent.Password);
})
//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");