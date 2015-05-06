// JavaScript Document

	var apiKey = '45228092';
	var apiSecret = 'a678c7fa4650bb08c4aaf9efcbaf830afb84388f';
	var OpenTok = require('opentok'),
    opentok = new OpenTok(apiKey, apiSecret);
	
	// Create a session that will attempt to transmit streams directly between
	// clients. If clients cannot connect, the session uses the OpenTok TURN server:
	opentok.createSession(function(err, session) {
	  if (err) return console.log(err);
	  // save the sessionId
	  db.save('session', session.sessionId, done);
	});
	
	// The session will the OpenTok Media Router:
	opentok.createSession({mediaMode:"routed"}, function(err, session) {
	  if (err) return console.log(err);
	  // save the sessionId
	  db.save('session', session.sessionId, done);
	});
	
	// A Session with a location hint
	opentok.createSession({location:'12.34.56.78'}, function(err, session) {
	  if (err) return console.log(err);
	  // save the sessionId
	  db.save('session', session.sessionId, done);
	});
	
	
	// Generate a Token from just a sessionId (fetched from a database)
	token = opentok.generateToken(sessionId);
	
	// Genrate a Token from a session object (returned from createSession)
	token = session.generateToken();
	
	// Set some options in a Token
	token = session.generateToken({
	  role :       'moderator',
	  expireTime : (new Date().getTime() / 1000)+(7 * 24 * 60 * 60), // in one week
	  data :       'name=Johnny'
	});
	
	

	