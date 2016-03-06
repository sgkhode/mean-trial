// load the express package and create our app
var express = require('express');
var app     = express();

// set the port based on environment (more on environments later)
var port    = 1337; 

// send our index.html file to the user for the home page
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// get an instance of the router
var adminRouter = express.Router();

// route middleware that will happen on every request
adminRouter.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});

app.route('/login').get(function(req,res){
	res.send('this is the login form');
})
.post(function(req,res){
	console.log('processing');
	res.send('Processing the login form!');
});

// create routes for the admin section
// admin main page. the dashboard
adminRouter.get('/', function(req, res) {
	res.send('I am the dashboard!');
});

adminRouter.param('name', function(req,res, next, name){
	console.log('Validating ' + name );
	req.name = name;
	next();
})

// users page
adminRouter.get('/users', function(req, res) {
	res.send('I show all the users!');
});


adminRouter.get('/users/:name', function(req, res){
	console.log('Sandeep here');
	res.send('hello ' + req.params.name + '!');
});

// posts page
adminRouter.get('/posts', function(req, res) {
	res.send('I show all the posts!');
});

// apply the routes to our application
app.use('/admin', adminRouter);

// start the server
app.listen(1337);
console.log('1337 is the magic port!');