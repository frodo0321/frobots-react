import React from "react";

export const title = "How to add google analytics on a WordPress site";
export const date = new Date("2018-04-20 09:31:22");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            Google analytics, or really any web site analytics software is an extremely important part of any successful website.  It moitors all of the behavior of users to allow you to make smart data driven decisions to improve your site, such as a/b tests.
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

                <p>
                    First you have to have a website up.  <a href="http://www.frobots.net/how-to-create-a-wordpress-website/">Check out my tutorial on how to do that if you don't have one already</a>
                </p>

                <p>
                    After you have a site, head over to <a href="https://www.google.com/analytics/">Google Analytics</a> and set up an account.
                </p>

                <img src="/images/Screenshot_from_2018-04-20_01-50-44.png"></img>

                <p>
                    Fill out the required information and accept the TOS.  It should take you to the screen with the javascript code on it.
                </p>

                <img src="/images/Screenshot_from_2018-04-20_01-53-15.png"></img>

                <p>
                    Now, ssh into your website and edit the file `<span class="inline-code">/var/www/html/wp-content/themes/{"{your theme}"}/functions.php</span>`
                </p>

                Add this line to the bottom of the file, replacing the code with your own.
                <pre className="code">
                    {`// Google Analytics
function google_analytics_include() {
    echo '<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-58505998-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());

        gtag("config", "UA-58505998-1");
    </script>';
}
add_action('wp_head', 'google_analytics_include');`}
                </pre>

                <p>
                    Now go to your site and check the developer's console to make sure the code is in it.
                </p>

                <img src="/images/Screenshot_from_2018-04-20_02-05-20.png"></img>

                <p>
                    After you've verified it's there, you should be good to go!  After a day or so, data should start to show up in the analytics dashboard.
                </p>

                <img src="/images/Screenshot_from_2018-04-20_02-06-29.png"></img>

            </div>
       );
    }
}

export const component = Post;
export default Post;
