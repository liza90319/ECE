        var apiKey = "45228092";
        var sessionId = "2_MX40NTIyODA5Mn5-MTQzMDc5MTExMzQ3NH5EZ0RzbHJnd0dTVTFzNThyZ2JqaU5oV2l-fg";
        var token = "T1==cGFydG5lcl9pZD00NTIyODA5MiZzaWc9MWIyNmU2YjQ1YzRmMjI2MTYxYzhhZjA0ZWY1MTg5ODFjMzQzOWNiODpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5USXlPREE1TW41LU1UUXpNRGM1TVRFeE16UTNOSDVFWjBSemJISm5kMGRUVlRGek5UaHlaMkpxYVU1b1YybC1mZyZjcmVhdGVfdGltZT0xNDMwNzkxMTIwJm5vbmNlPTAuMjk1NzEwMjQ2MzExODIyNjMmZXhwaXJlX3RpbWU9MTQzMzM4MzEwMyZjb25uZWN0aW9uX2RhdGE9";
        var status1 = false;
        var status2 = false;
        var status3 = false;


        var session = TB.initSession(sessionId); //create a session object
        session.addEventListener ('sessionConnected',sessionConnectedHandler);
        session.connect(apiKey,token);  //connect to a session
        session.on("streamCreated", function(event) {
        subscriber1 = session.subscribe(event.stream, mySubscriberDiv1);
          $(function resizeSubscriber1(){
             document.getElementById("mySubscriberDiv1").style.width='25%';
             document.getElementById("mySubscriberDiv1").style.height= '25%';
             status1 = true;
          });

        subscriber2 = session.subscribe(event.stream, mySubscriberDiv2);
          $(function resizeSubscriber2(){
             document.getElementById("mySubscriberDiv2").style.width='50%';
             document.getElementById("mySubscriberDiv2").style.height='50%';
             status2 = true;
          });

        subscriber3 = session.subscribe(event.stream, mySubscriberDiv3);
           $(function resizeSubscriber3(){
             document.getElementById("mySubscriberDiv3").style.width='25%';
             document.getElementById("mySubscriberDiv3").style.height='25%';
             status3 = true;
          });

        }).connect(token);


        function subscribeToStream(streams){
            for (var i=0;i<streams.length;i++){
              var streams = streams[i];
                if(session.connection.connectionID == stream.connection.connectionID){
                    return;
                }
                var div = document.creatveElement('div');
                var divID = "stream-"+stream.streamID;
                div.setAttribute('id',divID);
                document.body.appendChild(div);
                session.subscribe(stream,divID,{width:320,height:240})



            }

        }

        function sessionConnectedHandler( sessionConnectedEvent ){
          document.getElementById("Aidle").style.display='none';
          document.getElementById("Astreaming").style.display='block';
          document.getElementById("Bidle").style.display='none';
          document.getElementById("Bstreaming").style.display='block';
          document.getElementById("Cidle").style.display='none';
          document.getElementById("Cstreaming").style.display='block';
          var publisher = TB.initPublisher(apiKey,"MyPublisherDiv",{width:400, height:200}); //publish our video step1
          session.publish(publisher);//pubilsh our video step 2
          $(function resizePublisher() {
          document.getElementById("MyPublisherDiv").style.display='none';
         
          });

        }


        function buttonA() {
            alert("You are ununsubscribed");
            $("#buttonA").html('Start Camera A');
            session.unsubscribe(subscriber1);
            status1 = false;
            document.body.appendChild(div);
        }


        function buttonB() {
            alert("You are ununsubscribed");
            $("#buttonB").html('Start Camera B');
            session.unsubscribe(subscriber2);
            status2 = false;
        }

        function buttonC() {
            alert("You are ununsubscribed");
            $("#buttonC").html('Start Camera C');
            session.unsubscribe(subscriber3);
            status3 = false;
        }

       

        TB.setLogLevel ( TB.DEBUG );

