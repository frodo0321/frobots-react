import React from "react";

export const title = "Server Load Balancing Tutorial";
export const date = new Date("2016-02-02 21:56:30");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            This is going to be a simple tutorial on server load balancing using <a href="https://www.nginx.com/">nginx</a> and <a href="https://docs.python.org/2/library/basehttpserver.html">python's BaseHTTPServer module</a>.
            Load balancing is the way all the big websites are able to work.  If they used only a single server, they would get flooded with traffic and crash.  Load balancing allows for having multiple servers by distributing traffic among them.
        </p>
    </div>
);


class ComputerVisionSecuritySystem extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        return (
            <div className="post-content">

                {preview}

                <p>
                    So to begin, I have made an HTTP server python module and a python script to create the HTTP servers.
                </p>

                test_server.py is the HTTP server module:
                <pre className="code">{`from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler
from SocketServer import ThreadingMixIn

class Handler(BaseHTTPRequestHandler):
    message="test"
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(self.message)
        return

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    pass

if __name__=="__main__":
    server=ThreadedHTTPServer(('0.0.0.0', 8000), Handler)
    print "server started"
    server.serve_forever()`}
                </pre>

                create_servers.py is used to create and run HTTP servers:
                <pre className="code">
                    {`from test_server import Handler, ThreadedHTTPServer
import threading
from time import sleep

class H1(Handler):
    message="Server 1"

class H2(Handler):
    message="Server 2"

class H3(Handler):
    message="Server 3"


if __name__=="__main__":
    ip="0.0.0.0"
    port=8000
    handlers=[H1,H2,H3]
    servers=[ThreadedHTTPServer((ip, port+i), handlers[i]) for i in range(3)]
    threads=[threading.Thread(target=s.serve_forever, args=()) for s in servers]
    for t in threads:
        t.daemon=True
    [t.start() for t in threads]
    while 1:
        sleep(1)`}
                </pre>

                Once create_servers.py is run:
                <pre className="code">{`$ python create_servers.py`}
                </pre>
                <p>
                    3 servers get started on your machine at ports 8000, 8001, and 8002.
                    If you enter "localhost:8000" in your web browser, "Server 1" gets displayed.  If you use port 8001, "Server 2" gets displayed, and for port 8002, "Server 3" gets displayed.
                </p>

                <p>
                    Now that we have our 3 servers running, we can use nginx. To install, run
                </p>

                <pre className="code">
                    {`$ sudo apt-get install nginx`}
                </pre>
                After it installs it should start running.

                Now, we need to edit the nginx config file:
                <pre className="code">{`$ sudo vim /etc/nginx/sites-available/default`}
                </pre>

                Comment anything not commented, then put in:
                <pre className="code">
                    {`upstream backend  {
    server localhost:8000;
    server localhost:8001;
    server localhost:8002;
}

server {
    location / {
        proxy_pass  http://backend;
    }
}`}
                </pre>

                Then restart nginx:
                <pre className="code">
                    {`$ sudo service nginx restart`}
                </pre>

                <p>
                    Now, when you go to "localhost" in your web browser, you should see "Server X" displayed where X changes each time you refresh.  The default load balancing method is round robin.  Notice how the server used follows the pattern "1-2-3-1-2-3-...".  Round robin simply uses the next server after each request comes in.
                </p>

                <p>
                    For more information on load balancing methods, refer to <a href="http://nginx.org/en/docs/http/load_balancing.html#nginx_load_balancing_methods">nginx's documentation</a>.
                </p>




            </div>
       );
    }
}

export const component = ComputerVisionSecuritySystem;
export default ComputerVisionSecuritySystem;

