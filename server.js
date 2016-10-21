
var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    app         = express(),
    employees   = JSON.parse(fs.readFileSync('data/employees.json', 'utf-8')),
    tasks      = JSON.parse(fs.readFileSync('data/tasks.json', 'utf-8')),
    states      = JSON.parse(fs.readFileSync('data/states.json', 'utf-8'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Would normally copy necessary scripts into src folder (via grunt/gulp) but serving
//node_modules directly to keep everything as simple as possible
app.use('/node_modules', express.static(__dirname + '/node_modules')); 

//The src folder has our static resources (index.html, css, images)
app.use(express.static(__dirname + '/src')); 

app.get('/api/employees', (req, res) => {
    res.json(employees);
});

app.get('/api/employees/:id', (req, res) => {
    let employeeId = +req.params.id;
    let selectedEmployee = {};
    for (let employee of employees) {
        if (employee.id === employeeId) {
           selectedEmployee = employee;
           break;
        }
    }  
    res.json(selectedEmployee);
});

app.post('/api/employees', (req, res) => {
    let postedEmployee = req.body;
    let maxId = Math.max.apply(Math,employees.map((cust) => cust.id));
    postedEmployee.id = ++maxId;
    postedEmployee.gender = (postedEmployee.id % 2 === 0) ? 'female' : 'male';
    employees.push(postedEmployee);
    res.json({ status: true });
});

app.put('/api/employees/:id', (req, res) => {
    let putEmployee = req.body;
    let id = +req.params.id;
    let status = false;
    for (let i=0,len=employees.length;i<len;i++) {
        if (employees[i].id === id) {
            employees[i] = putEmployee;
            status = true;
            break;
        }
    }
    res.json({ status: status });
});

app.delete('/api/employees/:id', function(req, res) {
    let employeeId = +req.params.id;
    for (let i=0,len=employees.length;i<len;i++) {
        if (employees[i].id === employeeId) {
           employees.splice(i,1);
           break;
        }
    }  
    res.json({ status: true });
});

app.get('/api/tasks', function(req, res) {
    res.json(tasks);
});

app.get('/api/tasks/:id', function(req, res) {
    let employeeId = +req.params.id;
    for (let task of tasks) {
        if (task.employeeId === employeeId) {
            return res.json([ task ]);
        }
    }
    res.json([]);
});

app.get('/api/states', (req, res) => {
    res.json(states);
});

// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000);

console.log('Express listening on port 3000.');

//Open browser
var opn = require('opn');

opn('http://0.0.0.0:3000').then(() => {
    console.log('Browser closed.');
});


