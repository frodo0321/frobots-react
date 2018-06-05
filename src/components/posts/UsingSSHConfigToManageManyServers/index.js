import React from "react";

export const title = "Using ~/.ssh/config to manage many servers";
export const date = new Date("2018-04-29 20:14:53");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            One cool little trick of ssh that I find very helpful is the config file.  With work and my blogs and different computers, there are about 20 computers I need to ssh into from time to time and there is no way I can remember all the different IP addresses, usernames, ssh keys.  The config file stores all that information and gives it an easy to remember name.
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


                An entry in the file looks as follows:
                <span className="code">`~/.ssh/config`</span>
                <pre className="code">
                    {`Host *easy-to-remember-name*
    HostName *the server ip address*
    User *username*
    IdentityFile *path to ssh key file*`}
                </pre>
                
                A more specific example
                <pre className="code">
                    {`Host my-server
    HostName 192.168.1.2
    User root
    IdentityFile ~/.ssh/id_rsa`}
                </pre>

                Then when you want to ssh into the server all you have to do is type
                <pre className="code">
                    {`ssh my-server`}
                </pre>
                <p>
                    to ssh into it.
                </p>

                <p>
                    Then if you ever have to manage multiple servers you just need to add another entry into the config file.  I find this makes it way easier and speeds things up a ton for me.
                </p>


            </div>
       );
    }
}

export const component = Post;
export default Post;
