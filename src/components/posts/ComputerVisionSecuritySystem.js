import React from "react";

export const title = "Computer Vision Security System";
export const date = new Date("2015-01-17 23:46:57");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            This is a cool project that uses computer vision techniques and a webcam to act as a security system. I will demonstrate how to detect if a door is opened then have my computer yell at the opener. For this all you need is a webcam, python, and the modules opencv and pyttsx.
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
                    A brief overview:
                </p>
                <ul>
                    <li>Use background subtraction to see if the door gets moved</li>
                    <li>Then have the pyttsx module make your computer say whatever you want at the person who opened it</li>
                </ul>

                The <a href="http://docs.opencv.org/trunk/doc/py_tutorials/py_video/py_bg_subtraction/py_bg_subtraction.html">opencv background subtractors</a> weren't working for me so I <a href="https://github.com/frodo0321/background_subtractor">made my own</a>.
                <h3>Door Movement</h3>
                Opencv has <a href="http://docs.opencv.org/trunk/doc/py_tutorials/py_video/py_bg_subtraction/py_bg_subtraction.html">a nice tutorial</a> on their background subtractor, but I'll be using the one I made. Grabbing a frame from the webcam, putting it into the background subtractor, then displaying it looks something like this
                <pre className="code">{`import background_subtractor
import cv2
import numpy as np
import video

cap=video.create_capture(0)           #get your webcam

#####wait until a good frame comes in####
ret=False
while not ret:
    ret, frame=cap.read()
#########################################

frame=cv2.cvtColor(cap.read()[1], cv2.COLOR_BGR2GRAY)

bs=background_subtractor.BackgroundSubtractor(frame)

while True:
    frame=cv2.cvtColor(cap.read()[1], cv2.COLOR_BGR2GRAY)      #get a grayscale frame from webcam

    foreground_mask=bs.apply(frame)

    cv2.imshow("frame", frame)
    cv2.imshow("mask", foreground_mask)

    k=cv2.waitKey(10)               #delay 10 miliseconds and get key press
    if k==1048690:                  #the 'r' key; will probably be 114 for you
        bs.update_reference_frame()
    if k==1048603:                  #the 'esc' key; will probably be 27 for you
        cv2.destroyAllWindows()
        quit()
                `}</pre>
                <video autoplay="autoplay" loop="loop" width="1280" height="480">
                <source src="http://i.imgur.com/GjqunBK.mp4" />
                </video>

                <p>
                    And now we can see when the door opens!  But how do we get the computer to know?  First we'll start off by <a href="https://docs.python.org/2.3/whatsnew/section-slices.html">slicing</a> the frame to get just the door.
                </p>

                <p>
                    Adding
                </p>
                <pre className="code">{`door_slice=frame[100:480,400:640]
mask_slice=foreground_mask[100:480,400:640]

cv2.imshow("door slice", door_slice)
cv2.imshow("mask slice", mask_slice)
                `}</pre>
                <p>
                    to the inside of the loop gives
                </p>

                {/*<!--<iframe width="380" height="480" src="//www.youtube.com/embed/FXoxSWzksig?autoplay=1&loop=1&playlist=FXoxSWzksig" frameborder="0" allowfullscreen></iframe>-->*/}

                <video autoplay="autoplay" loop="loop" width="380" height="480">
                <source src="http://i.imgur.com/MLJqdYx.mp4" />
                </video>

                From here, all we have to do is count the number of white pixels to see if the door is open.  Since the dimensions of the image we're using are 380x240 (from the slice; 480-100, 640-400), the total number of pixels is 91200.   So I chose a threshold of 80000 for the door being open, meaning if the number of while pixels is greater than 80000, consider the door to be open.
                <pre className="code">{`if np.cumsum(mask_slice)[-1] &gt; 80000:
print "DOOR IS OPEN"
                `}</pre>

                <video autoplay="autoplay" loop="loop" width="640" height="480">
                <source src="http://i.imgur.com/AzVRnju.mp4" />
                </video>

                <h3>Make It Talk!</h3>
                <p>
                    All we have to do now is use the <a href="https://pyttsx.readthedocs.org/en/latest/engine.html">text to speech module</a>. To do so, add
                </p>
                <pre className="code">{`import pyttsx

engine=pyttsx.init()
talked=False
                `}</pre>
                <p>
                    to the top of the code around the other imports.
                Then switch out the
                </p>

                <pre className="code">{`print "DOOR IS OPEN"
                `}</pre>
                line with
                <pre className="code">{`if not talked:
    engine.proxy._driver.say("Go away!")
    talked=True
else:
    if talked:
        talked=False
                `}</pre>
                <p>
                    (or whatever else you want it to say inside the quotes).  The talked variable makes it so it only talks once each time the door opens and doesn't keep repeating.  And if you're wondering where the proxy._driver came from, the original pyttsx API wasn't working properly so I had to do some reverse engineering on it.
                </p>
                <p>
                    Time to test it out
                </p>

                <iframe src="//www.youtube.com/embed/j7gPZ-kI-Ws" width="420" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

                {/*<!--<video controls width="640" height="480">
                <source src="../security_system_final.mp4" />
                </video>-->*/}

                <p>
                    ...Not the most convincing voice. It'd be better by playing an audio file of a dog barking or something like that(and python even has a <a>module for reading WAV files</a>), but I'm happy with it right now.
                </p>


            </div>
       );
    }
}

export const component = ComputerVisionSecuritySystem;
export default ComputerVisionSecuritySystem;
