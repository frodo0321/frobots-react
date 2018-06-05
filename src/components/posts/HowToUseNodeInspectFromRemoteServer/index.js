import React from "react";

export const title = "How to use nodejs inspect from a remote server";
export const date = new Date("2018-05-03 09:34:11");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            If you don't know what the <a href="https://nodejs.org/en/docs/guides/debugging-getting-started/">nodejs inspector</a> is yet, its a very useful tool which allows a nodejs program to send console output to a google chrome dev console.  And the google chrome inspector is super useful when dealing with json since it has the nested dropdown interface.
        </p>
    </div>
);


class Post extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        return (
            <div className="post-content">

                {preview}


                <img src="/images/Screenshot_from_2018-05-02_19-43-51.png"></img>

                Basically to use it, all you have to do is go to the url <a href="chrome://inspect">chrome://inspect</a> in chrome and click the "Open dedicated DevTools for Node" link.  That should just open up a basic looking dev tools.  Then to use the inspector, start node with the <span class="inline-code">--inspect</span> flag
                <pre className="code">
                    {`node --inspect`}
                </pre>
                <p>
                    Then anything you output to the console such as using <span class="inline-code">console.log</span> will get sent to the dev tools console.
                </p>

                <img src="/images/Screenshot_from_2018-05-02_19-50-40.png"></img>

                <img src="/images/Screenshot_from_2018-05-02_19-51-00.png"></img>

                <p>
                    I work on remote servers a lot and I wanted to find a way to use that on a remote node process.  One way would be to open up ports 9229 and 9222 on the remote server and connect the DevTools console to that, but that seems like a huge security issue.  So the method I came up with is to use an ssh tunnel.  An ssh tunnel just connect a remote computer port locally.  So if there is a process on port 8000 on the remote computer, an ssh tunnel can be used to bind that process to a local port so it seems as if the process is actually local.
                </p>

                Now, the chrome DevTools is configured by default to check ports 9229 and 9222 and when you first run <span class="inline-code">node --inspect</span> it should say something like 
                <pre className="code">{`Debugger listening on ws://127.0.0.1:9229/99fce0ec-943b-40a8-9ebf-29a200b6d22d`}</pre>
                <p>
                    which shows the port it is running on.  No to get the chrome DevTools inspector hooked up, all we have to do is create an ssh tunnel to the remote computer connecting its port 9229 to our local 9229.
                </p>
                <pre className="code">{`ssh -L 9229:localhost:9229 user@remote-ip -N -g`}</pre>

                <p>
                    Assuming the node process is currently running on the remote computer, it should create the connection and data should start flowing through.
                </p>

            </div>
       );
    }
}

export const component = Post;
export default Post;
