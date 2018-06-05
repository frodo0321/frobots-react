import React from "react";

export const title = "How to add Google AdSense on WordPress";
export const date = new Date();//new Date("2018-04-20 09:31:22");
export const published = false;
module.exports.public = false;

export const preview = (
    <div>
        <p>
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

                First thing to do is make sure you are following all of the rules.  Head over to <a href="https://support.google.com/adsense/answer/1348688?hl=en&ref_topic=1271507">https://support.google.com/adsense/answer/1348688?hl=en&ref_topic=1271507</a> and make sure your site is up to date.  I was missing a privacy policy on my page, so I just found a site similar to what mine is, copied theirs, and touched it up a bit to fit mine.

                After that, go to google adsense website and fill out information

                It will give you an html snippet.  SSH into your server and edit `<span class="inline-code">/var/www/html/wp-content/themes/{"{your theme}"}/functions.php</span>`
                At the end, add the line
                <pre className="code">
                    {`// Google AdSense
function google_adsense_include() {
    echo '&lt;!--Google AdSense--&gt;
    &lt;script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"&gt;&lt;/script&gt;
    &lt;script&gt;
    (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-9511215937776215",
        enable_page_level_ads: true
    });
    &lt;/script&gt;';
}
add_action('wp_head', 'google_adsense_include');`}
                </pre>
                replacing the code with your own.
                To verify, go to your site, press F12, go to the Elements tab, then find the bottom of the head element.  You should see the matching code there which loads the AdSense javascript.

                After you've verified it is there, go back to AdSense, check the checkbox "I've pasted the code into my site" and click done.  It should show a screen saying they're activating your account and now we wait.

                You should get an email once it is complete.  If your site doesn't follow the rules, it will get rejected and they will make you fix it before you can start showing ads.

            </div>
       );
    }
}

export const component = Post;
export default Post;
