const express = require('express')
const app = express()
//const users = require('./users.json')
const bodyParser = require('body-parser')

//Terminal Commands required to get this working
//change (cd) into appropriate project directory
// c:/etc/npm init
// c:/etc/npm install express --save
// SAVE project in VS then Initialize server
// c:/etc/node index.js
// Use a tool such as "POSTMAN" to validate it works -- or go to http://localhost:PORT#
// NOTE when pushing updates may need to restart node index.js  Ctrl^c and run c:/node index.js
// to view content go to http://localhost:PORT#/file.name

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//example to pull from specific file "users.json"
//app.get('/', (req, res) => res.send(users))

app.get('/students?search=name', (req, res) => {
    /* GET a user by their name */
    let name = req.query.name;

    //example functionality
    //https://localhost:3000/path?name=bob
})
app.get('/students/:studentId', (req, res) => {
    /* GET a user by their id */
    let id = req.params.studentId;
    //res.send(id.slice().filter(student => student.id === id)[0])
    res.send("Current ID: " + id)
    // res.send if it fails try id.grade.toString() --- a solid number it trys to interpret as a error code
    res.send(id.grade)
    //console.log(id)
    // example for multiple
    // app.get('/:id/:var2', (req, res) => {
    // let var2 = req.params.var2
    // http://localhost:3000/site.name/123/123
})
app.get('/grades/:studentId', (req, res) => {
    /* GET a user by their id */
    let id = req.params.studentId;
    console.log(id)
    // example for multiple
    // app.get('/:id/:var2', (req, res) => {
    // let var2 = req.params.var2
    // http://localhost:3000/site.name/123/123
})
app.post('/', (req, res) => {
    /* POST user data using the request body */
    let body = req.body

    //testing this functionality
    //https://localhost:3000/profilePic=whateverthevalueis
    //build out the functionality in POSTMAN --> make sure body is built in JSON
    //{"email":"valueof","profilePIC":"valueof"}
    //app.use(express.json());
    //
})


const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))