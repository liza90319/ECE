// JavaScript Document

		var apiKey    = "45228092";
		var sessionId = "1_MX40NTIyODA5Mn5-MTQzMDk0MTY1NzE2NH5QcTRydkZyU1Iya21taFhDVmN2UDVZc3N-fg";
		var token     = "T1==cGFydG5lcl9pZD00NTIyODA5MiZzaWc9MmExMTY1YTNhMTdlNzQwMGJiNjk4NjY1OGU1NDVkYWY5NmJhYzcxMDpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTFfTVg0ME5USXlPREE1TW41LU1UUXpNRGswTVRZMU56RTJOSDVRY1RSeWRrWnlVMUl5YTIxdGFGaERWbU4yVURWWmMzTi1mZyZjcmVhdGVfdGltZT0xNDMwOTQxNjY0Jm5vbmNlPTAuNDg4NTkyNjUxMDI1MjU3NzMmZXhwaXJlX3RpbWU9MTQzMTU0NjQ1MCZjb25uZWN0aW9uX2RhdGE9";
		 
		var session;
		var connectionCount = 0;
		
		
		 
		function connect() {
		  if (OT.checkSystemRequirements() == 0) {
			console.log("The client does not support WebRTC.");
		  } else {
			// Replace apiKey and sessionId with your own values:
			session = OT.initSession(apiKey, sessionId);
			session.on({
			  connectionCreated: function (event) {
				connectionCount++;
				console.log(connectionCount + " connections.");
			  },
			  connectionDestroyed: function (event) {
				connectionCount--;
				console.log(connectionCount + " connections.");
			  },
			   sessionDisconnected: function sessionDisconnectHandler(event) {
				// The event is defined by the SessionDisconnectEvent class
				console.log("Disconnected from the session.");
				//document.getElementById('disconnectBtn').style.display = 'none';
				if (event.reason == "networkDisconnected") {
				  alert("Your network connection terminated.")
				}
			  }
			});
			// Replace token with your own value:
			session.connect(token, function(error) {
			  if (error) {
				OT.log("Unable to connect: ", error.message);
			  } else {
				//document.getElementById('disconnectBtn').style.display = 'block';
				console.log("Connected to the session.");
				connectionCount = 1;
			  }
			});
		  }
		}
		 
		 
		 
		function disconnect() {
		  session.disconnect();
		}
		 
		connect();
//Publishing Stream

	var session;
	var publisher;
	 
	if (OT.checkSystemRequirements() == 1) {
		// Replace with the replacement element ID:
		publisher = OT.initPublisher('myPublisher');
		publisher.on({
			streamCreated: function (event) {
				console.log("Publisher started streaming.");
			},
			streamDestroyed: function (event) {
				console.log("Publisher stopped streaming. Reason: "
				   + event.reason);
			}
		});
	 
		// Replace apiKey and sessionID with your own values:
		session = OT.initSession(apiKey, sessionId);
		// Replace token with your own value:
		session.connect(token, function (error) {
			if (session.capabilities.publish == 1) {
				session.publish(publisher);
			} else {
				console.log("You cannot publish an audio-video stream.");
			}
		});
	} else {
		console.log("The client does not support WebRTC.");
	}


//Subscribing to a stream
	session.on("streamCreated", function (event) {
	   console.log("New stream in the session: " + event.stream.streamId);
	});
	// Replace with a valid token:
	session.connect(token);
	session.subscribe(stream, 'left_camera');

	  