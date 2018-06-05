import React from "react";

export const title = "Building a social network app with reactjs and nodejs Part 1: Project Planning";
export const date = new Date("2018-04-29 00:15:33");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            This will be a tutorial on building a basic social network app using react and node, or the MERN stack as I've heard it be called.

            <h2>Part 1. Planning</h2>
            First step is deciding what the scope of the project is, or the MVP.  For this, I decided that, in order for the app to be usable, it needs some basic features such as:
            <ul>
            <li>Registration</li>
            <li>Authentication</li>
            <li>Profile page</li>
            <li>News feed / status updates</li>
            <li>Friendship (request, accept, remove)</li>
            </ul>
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

                This way, there would always be new content being created from friends, giving users some value and a reason to return.  Then once this is created, a marketing campaign would be of value for getting users into the funnel and the site itself has enough of a reason for them to return, giving the opportunity for growth.

                Then it is ideal to come up with a basic api for the backend.  It doesn't have to be perfect but just something to work with.  For this, I came up with these endpoints and models that should be able to accomplish the MVP.
                <h3>Endpoints</h3>
                <ul>
                <li>POST /register</li>
                <li>POST /login</li>
                <li>POST /logout</li>
                <li>GET /me</li>
                <li>POST /update-profile</li>
                <li>POST/GET /status-updates</li>
                <li>POST/GET /friend-requests</li>
                <li>POST/GET friend-connection</li>
                </ul>
                <h3>Models</h3>
                <pre class="code">{`User: {
    name: String,
    email: String,
    password: String,
    profilePicture: String,
}
StatusUpdate: {
    user: {
        type: ObjectId,
        ref: User
    },
    text: String
}
FriendRequest: {
    from: {
        type: ObjectId,
        ref: User,
    },
    to: {
        type: ObjectId,
        ref: User
    },
    status: {
        enum: ["pending", "accepted", "rejected"]
    }
}
FriendConnection: {
    users: [{
        type: ObjectId,
        ref: User
    }],
    friendRequest: {
        type: ObjectId,
        ref: FriendRequest
    }`}
                </pre>

                <p>
                Then, it is a good idea to create mockups to understand the basic flow of the app and use some project management software to organize and prioritize things.
                </p>
                <p>
                For the mockups I use <a href="https://balsamiq.com/">Balsamiq</a>, which has a free trial version, and for project management I use <a href="https://trello.com/">Trello</a>
                </p>

                <p>
                    Here are a few mockups I created for this project:
                </p>

                <img src="/images/Screenshot_from_2018-04-01_03-31-21.png"></img>

                <img src="/images/Screenshot_from_2018-04-01_04-40-57.png"></img>

                <img src="/images/Screenshot_from_2018-04-04_01-26-50.png"></img>

                <img src="/images/Screenshot_from_2018-04-04_01-26-50.png"></img>


                <p>
                    Stay tuned: part 2 coming soon!
                </p>

                {/*<!--Now that a basic plan is mapped out its time to move onto creating everything.
                <a href="">Part 2 will cover creating the frontend of the app using react.js</a>
                -->*/}


            </div>
       );
    }
}

export const component = Post;
export default Post;
