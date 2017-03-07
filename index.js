'use strict'

const express = require('express');

let app = express();

let messages = ['Chat Open.'];

app.get('/api/get_messages', function(req, res){
	res.end(messages.toString());
});

app.get('/api/send_message', function(req, res){
	let message = req.query.message;

	console.log('[Message] ' + message);

	messages.push(message);
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.listen(80, function(){
	console.log('Ready.');
});