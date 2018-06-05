import React from "react";

export const title = "How to create a WordPress website";
export const date = new Date("2018-04-15 23:30:41");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            This post will be showing a simple way to create your own WordPress website.  I will go over everything from getting a custom url, getting a remote server, and setting up WordPress.  Unfortunately its not free to do this, but it is fairly inexpensive.
        </p>
    </div>
);


class HowToCreateWordPressWebsite extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        return (
            <div className="post-content">

                {preview}

                <h2>Setting up a server</h2>

                <p>
                    First thing we want to do is set up a server. You can always host your site on your local computer or even your smart phone for free (except for internet costs) but I find it way easier to manage and maintain it from a service.  There are many cloud computer services out there such as AWS, Azure, etc. but I will be using <a href="https://www.digitalocean.com/">Digital Ocean</a> because I find it to be cheap and easy.  
                    After creating an account and adding billing info and everything, we can create what they call a droplet, which is just a computer somewhere else in the world.
                </p>

                <img src="/images/Screenshot_from_2018-04-15_15-55-18.png"></img>

                <p>
                    Pick the size, I went with the cheapest because I don't expect millions of people visiting my site.
                </p>
                <img src="/images/Screenshot_from_2018-04-15_15-56-51.png"></img>


                <p>
                    Pick the location for the server.  For this I picked San Francisco since it's closest for me but ideally you would want to pick the one closest to your target audience since the closer the server is physically to the person, the faster the site loads.
                </p>
                <img src="/images/Screenshot_from_2018-04-15_15-57-05.png"></img>


                <p>
                    Now the tricky step is using an ssh key.  This is a secret key that only you have access to so now one else can get into the server.  Github has some nice tutorials on it
                    <a href="https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/">https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/</a>
                    <a href="https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/">https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/</a>
                </p>
                <p>
                    After creating an ssh key pair, we can add the public key into the menu, then click create. 
                </p>
                <img src="/images/Screenshot_from_2018-04-15_15-57-19.png"></img>

                It takes a bit of time to set up.  Once it's finished, we need to grab our ip address for the next step.  That can easily be found by clicking on the droplet name and finding the ip address field.
                <img src="/images/Screenshot_from_2018-04-11_01-41-06.png"></img>

                <h2>Aquiring a url</h2>

                <p>
                    I'm not too familiar with the way it all works, but to my understanding, url domain names are managed by the ICANN organization and you're able to rent them out from registrars or sellers.  The registrar I am familiar with and will be using is <a href="https://www.name.com">name.com</a> but there are many others to choose from.  All you have to do is go on their site, then search and buy the name you want.  They're usually pretty cheap like $10/year but some can get crazy expensive.  I bought <a href="http://www.tylerhaun.com">tylerhaun.com</a> to put my personal blog on.
                </p>

                <p>
                    After buying out domain name, we go to My Account > My Domains > DNS Record.  The DNS is the service that maps the domain name to its ip address.  Now, we enter in "www" in the host field and grab the ip address from the previous step and enter it in the "Answer" field, and click "Add Record".  This just says that when someone goes to www.tylerhaun.com, they get sent to the digital ocean server. We can easily test it by going to that url.
                </p>

                <img src="/images/Screenshot_from_2018-04-11_01-45-41.png"></img>

                <p>
                    Looks good!  We can verify everything is set up by going to the url:
                </p>

                <img src="/images/Screenshot_from_2018-04-11_01-47-37.png"></img>

                <h2>Setting up wordpress</h2>

                <p>
                    Next is to ssh into the server and wordpress should be enabled.  For ssh I like to set up a config to make it easier.
                </p>
                In `~/.ssh/config`, add the lines
                <pre>
                    {`Host tylerhaun
HostName 192.241.199.62
User root
IdentityFile ~/.ssh/id_rsa`}
                </pre>
                <p>
                    which makes it so all we have to do is run `ssh tylerhaun` in order to get in.  Then as soon as we get it it displays a message saying wordpres has been enabled.  All we have to do now is go to our site's url and follow the setup instructions to create an account.  After that, it should be functional!
                </p>

                <img src="/images/Screenshot_from_2018-04-11_02-02-34.png"></img>


                <p>
                    Nothing too special just yet but it gets way easier from here.
                    To make updates, all you have to do is go to $URL/wp-admin and log in (ex. www.tylerhaun.com/wp-admin)
                </p>


                <h2>Securing server</h2>

                <p>
                    One very important thing is security.  There are a couple things we should do to make the server more secure so no hackers get in.  
                    One measure is adding ufw.  Ufw is the universal firewall and can be set up to block all unwanted traffic  Since this is a basic http web server, the only ports that should really be open are 22 for ssh and 80 for http.  Everything else should be blocked.  It seems the new droplets com preinstalled with it but for reference, we would run
                </p>
                <pre className="code">
                    {`sudo ufw enable
sudo ufw allow 22
sudo ufw allow 80`}
                </pre>

                <p>
                    My old server didn't have this preinstalled, so thats good its on the new ones.  
                    The next security enhancement is to create a user.  I always here its extremely insecure to have root user be accessible which is why I like to create a regular user.  We can enable sudo on the user if we do need to run commands as root, so nothing is really lost from it.
                </p>

                <p>
                    Digital Ocean has a pretty goo guide on this
                    <a href="https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-ubuntu-quickstart">put link here</a>
                </p>

                <p>
                    The to disable ssh-ing into root, move ssh authorized keys to the created user.
                </p>

                <pre className="code">
                    {`su - username
mkdir .ssh
sudo mv /root/.ssh/authorized_keys .ssh/
sudo chown username:username .ssh/authorized_keys`}
                </pre>

                <p>
                    and on the host computer, update the `~/.ssh/config` User field to username.
                </p>


                <p>
                    One last thing to consider (it also seems fixed) is to disable password ssh authentication, so that only someone with the ssh key can get in.
                    In the file `/etc/ssh/sshd_config`, we can just add / edit the line to be 
                </p>

                <pre className="code">PasswordAuthentication no</pre>

                <p>
                    then 
                </p>
                <pre className="code">sudo sshd restart</pre>
                <p>
                    should reload the config.
                </p>

                <p>
                And those are the big security improvements I can think of to help prevent hackers from taking control.
                </p>


                <p>
                    Now, we have out WordPress server running on the internet and we can customize WordPress and add all the content we want to out hearts desire.  
                </p>



            </div>
       );
    }
}

export const component = HowToCreateWordPressWebsite;
export default HowToCreateWordPressWebsite;
