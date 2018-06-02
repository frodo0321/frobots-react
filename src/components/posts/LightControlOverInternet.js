import React from "react";

class WordPressReactMigration extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        let preview = (
            <div>
                <p>
                    Ever wonder how people control lights over the internet (such as from The Big Bang Theory)?  Here's a little tutorial on how to do it.
                </p>
                <p>
                    For this I'm using python, Ubuntu, and an Arduino Mega.  Tutorials on how to install these can be found from a <a href="http://lmgtfy.com/?q=how+to+install+python">simple google search</a>.
                </p>
            </div>
        );

        return (
            <div className="post-content">
                {preview}

                <p>A breif overview:</p>
                <ul>
                    <li>Use python's BaseHTTPServer module to... run an http server.</li>
                    <li>Have the server create buttons for your web browser.</li>
                    <li>Make a program on the arduino to receive serial data and turn an LED on and off.</li>
                    <li>Use these buttons to send the serial data to an arduino</li>
                </ul>


                <p>
                    I've already written a <a href="https://github.com/frodo0321/http-button-server">python module</a> that accomplishes the first 2 tasks but I'll quickly run through it anyways.
                </p>
                <h3>HTTP Server</h3>
                <p>
                    This is just a simple HTTP server that displays "hello world" in your web browser.
                </p>

                <pre className='code'>{`import BaseHTTPServer                                      #import the http server and
import socket                                              #the socket modules
import urlparse
port=8000                                                  #set the port number

class handler(BaseHTTPServer.BaseHTTPRequestHandler):      #this is the class that does the work of the server
def do_GET(self):                                      #when you load a webpage, a GET method is sent; this function handles that
self.send_response(200)                            #<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html">tells the web browser that everything's OK</a>
self.send_header('Content-type','text/html')       #<a href="http://www.w3.org/Protocols/rfc1341/4_Content-Type.html">tells the web browser what type of data is comming</a>
self.end_headers()                                           
self.wfile.write("hello world")                    #send html to the web browser


try:
    server = BaseHTTPServer.HTTPServer(('0.0.0.0', port), handler) #creates an instance of the server
    #####GET LOCAL IP ADDRESS######
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8",80))
    ip = s.getsockname()[0]
    s.close()
    ###############################
    print 'Started httpserver at ' + str(ip) + ':' + str(port) #this prints the thing you type into your browser
    server.serve_forever()
except KeyboardInterrupt:
    server.socket.close()
                `}</pre>
                <p>
                    Now when you run it, it will tell you the address it's at. For me it's 192.168.1.2:8000 (the 8000 is the port) and when I type that into chrome,
                </p>

                <p>
                    <a href="http://i.imgur.com/7JfgMP4.png"><img style={{width: "50%"}} src="http://i.imgur.com/7JfgMP4.png" alt="" /></a> happens.
                </p>
                <h3>Button Time</h3>

                <p>
                    Now it's time to make some buttons.
                    After a quick google search, <a href="http://www.w3schools.com/htmL/html_forms.asp">html button syntax</a> is found.
                    Now change the "hello world" to "&lt;form action='.'&gt;&lt;input type='submit' name='my_button' value='press me!'&gt;&lt;/form&gt;" and restart to server to get...
                </p>

                <p>
                    <a href="http://i.imgur.com/UABeDoK.png"><img style={{width: "50%"}} src="http://i.imgur.com/UABeDoK.png"  /></a>
                </p>

                <p>
                    We now have a nice little button on our website!
                    Now once you press it notice how the URL gets a "?my_button=press+me%21" at the end.  This is the <a href="http://en.wikipedia.org/wiki/Query_string">query string</a>.  This sends the server data that the user inputs.
                </p>
                <p>
                    Back to the python program, add 
                </p>

                <pre className='code'>print self.path</pre>

                <p>
                    after the 
                </p>

                <pre className='code'>self.wfile.write("hello world")</pre> 

                <p>
                    line (make sure you have the same number of spaces before it).  This path variable contains everything after the ip address you type in the web browser, including the query string.  We can use this data to see if the user presses the button.
                    When the print statement is changed to 
                </p>

                <pre className='code'>{`qs=urlparse.parse_qs(urlparse.urlparse(self.path)[4])
if len(qs)>0:
if qs['my_button'][0]=='press me!':
    print "THE BUTTON WAS PRESSED!"
                `}</pre>
                <p>
                    we can now see when the button is pressed!  Add whatever other code you want in that second if statement for it to be called too.
                </p>
                <br />
                <p>
                    Now for the much better way using the <a href="https://github.com/frodo0321/http-button-server">module off my github</a>.
                    This only needs 6 lines of code to do the same thing as before.
                </p>
                <pre className='code'>{`import http_button_server

def callback(qs):
    print qs

    s=http_button_server.ButtonServer(callback)
        s.add_button("button")
        s.run()
                `}</pre>

                <h3>
                    The Light
                </h3>
                <p>
                    I'm not doing an arduino tutorial since there's hundreds of them already.
                    For this part just upload 
                </p>
                <pre className='code'>{`void setup()
{
    Serial.begin(9600);
}
int toggle=0;
void loop()
{
    int data=Serial.read();
    if(data==1 && toggle==0)
    {
        toggle=1;
        digitalWrite(53, HIGH);
    }
    else if(data==1 && toggle==1)
    {
        toggle=0;
        digitalWrite(53, LOW); 
    }
}
                `}</pre>
                to your arduino.  This tells the arduino to toggle the LED plugged into pin 53 when it receives a 1 from the serial connection.


                <h3>
                Sending Serial Data
                </h3>
                In python this is very simple.  <a href="http://playground.arduino.cc/Interfacing/Python">The arduino website has a tutorial for this already</a>, so go look there.

                <h3>
                Putting it all together
                </h3>

                Finally we get to see this in action.  Modify the code from before to make it 
                <pre className='code'>{`import http_button_server
import serial

ser = serial.Serial('/dev/ttyACM2', 9600)   #/dev/ttyACM2 is the serial port in linux that it was using
#go to the arduino IDE, Tools->Serial Port to find it.
#I think its COM# on windows

def callback(qs):
    if qs['action'][0]=='Toggle LED':
    ser.write(chr(1))           #this writes a 1 to the arduino


    s=http_button_server.ButtonServer(callback)
        s.add_button("Toggle LED")
        s.run()
                `}</pre>
                <p>
                    , put the http_button_server.py file in the same directory as the code, run it, and there you go!
                </p>

                <p>
                    <a href="http://i.imgur.com/JL2YWnq.jpg"><img style={{width: "50%"}} src="http://i.imgur.com/JL2YWnq.jpg"/></a>
                </p>

                <p>
                    If you want to use it from any computer in the world, you first need to go on your router and <a href="http://lmgtfy.com/?q=how+to+port+forward">forward the port</a> (careful; this may cause security risks).
                    <br />
                    Then <a href="http://lmgtfy.com/?q=whats+my+public+ip+address#">find your public ip address</a> (get the hint?), type that into the web browser wherever you are in the world (with the port), and it should load the button page.
                <p>
                </p>
                    And if you wanted to control an actual light you would connect the pin from the LED of the arduino to either a power mosfet or relay to power the light on and off or a servo motor to physically turn the switch on and off, but I won't be covering that in this post.
                </p>
            </div>
       );
    }
}

export default WordPressReactMigration;

