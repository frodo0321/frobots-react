import React from "react";

require("../../cssLoader").load(__dirname + "/HowCPUWorks.scss");

export const title = "How a computer cpu works";
export const date = new Date("2015-12-04 10:53:41");

export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            Computers are in everything today.  From your smartphone, to your microwave, to your car, it's impossible to go through a day without using a computer of some sort.  But how does a computer actually work?  How does a computer... compute?
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
            <div className="post-content HowCPUWorks">

                <script type="text/javascript" src="http://www.frobots.net/wp-includes/js/logic_gate_simulator.min.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

                <div id="top"></div>

                {preview}

                The goal of this post is to give a simple, interactive tutorial on how to build a CPU (Central Processing Unit).

                Index:
                <a href="#logic_gates">1. Logic Gates</a>
                <a href="#memory">2. Memory</a>
                <a href="#mux">3. Multiplexer/Demultiplexer</a>
                <a href="#alu">4. ALU</a>
                <a href="#layout">5. CPU Layout</a>
                <a href="#fin">6. Putting it all together</a>

                {/*<!-- ----------------------------   LOGIC GATES   -------------------------------->*/}

                <div style={{float: "left"}}><h1 id="logic_gates">Logic Gates</h1></div>
                <div style={{float: "right"}}><a href="#top">top</a></div>
                <br />

                <h5>AND Gate</h5>

                The AND gate propagates a signal through if both of the inputs are on.

                (Click on the circles to the left of the gate to play around with it!)
                <svg id="andgate" width="400" height="100">
                </svg>
                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container("andgate");l.add_toggle_switch('s1', 10, 30);l.add_toggle_switch('s2', 10, 50);l.add_and('a1', 80, 30);l.add_led('l1', 160, 40);l.connect('s1', 0, 'a1', 0);l.connect('s2', 0, 'a1', 1);l.connect('a1', 0, 'l1', 0);l.run_forever(10);});`}} />
                <h5>OR Gate</h5>

                The OR gate propagates a signal if either of the inputs are on.

                <svg id="orgate" width="400" height="100">
                </svg>
                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container("orgate");l.add_toggle_switch('s1', 10, 30);l.add_toggle_switch('s2', 10, 50);l.add_or('o1', 80, 30);l.add_led('l1', 160, 40);l.connect('s1', 0, 'o1', 0);l.connect('s2', 0, 'o1', 1);l.connect('o1', 0, 'l1', 0);l.run_forever(10);});`}} />

                <h5>NOT Gate</h5>

                The NOT gate (also called an Inverter) propagates a signal that is the opposite of the input.

                <svg id="notgate" width="400" height="100">
                </svg>
                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container("notgate");l.add_toggle_switch('s1', 10, 30);l.add_buffer('b1', 80, 30, true);l.add_led('l1', 160, 30);l.connect('s1', 0, 'b1', 0);l.connect('b1', 0, 'l1', 0);l.run_forever(10);});`}} />

                <h5>NAND/NOR Gate</h5>

                When a circle is drawn at the end of a gate, it is the same as putting a NOT gate at the end.

                <svg id="nandnorgate" width="400" height="100">
                </svg>
                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container("nandnorgate");l.add_toggle_switch('s1', 10, 30);l.add_toggle_switch('s2', 10, 50);l.add_and('a1', 80, 30, true);l.add_led('l1', 170, 40);l.connect('s1', 0, 'a1', 0);l.connect('s2', 0, 'a1', 1);l.connect('a1', 0, 'l1', 0);l.add_toggle_switch('s3', 210, 30);l.add_toggle_switch('s4', 210, 50);l.add_or('o1', 280, 30, true);l.add_led('l2', 370, 40);l.connect('s3', 0, 'o1', 0);l.connect('s4', 0, 'o1', 1);l.connect('o1', 0, 'l2', 0);l.run_forever(10);});`}} />

                <h5>XOR/XNOR Gate</h5>

                The XOR gate is short for Exclusive OR.  This means that it is an OR gate that excludes when both of the inputs are on.  

                <svg id="xorxnorgate" width="400" height="100">
                </svg>
                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container("xorxnorgate");l.add_toggle_switch('s1', 10, 30);l.add_toggle_switch('s2', 10, 50);l.add_or('x1', 80, 30, false, true);l.add_led('l1', 170, 40);l.connect('s1', 0, 'x1', 0);l.connect('s2', 0, 'x1', 1);l.connect('x1', 0, 'l1', 0);l.add_toggle_switch('s3', 210, 30);l.add_toggle_switch('s4', 210, 50);l.add_or('x2', 280, 30, true, true);l.add_led('l2', 370, 40);l.connect('s3', 0, 'x2', 0);l.connect('s4', 0, 'x2', 1);l.connect('x2', 0, 'l2', 0);l.run_forever(10);});`}} />


                {/*<!------------------------------------- MEMORY ---------------------------------->*/}

                <div style={{float: "left"}}><h1 id="memory">Memory</h1></div>
                <div style={{float: "right"}}><a href="#top">top</a></div>
                <br />

                {/*<!---------------------  LATCH  -------------------------->*/}

                {/*<!------------  RS LATCH  ------------>*/}
                <h6 id='rs_latch_content'>RS Latch</h6>

                The RS Latch is a simple gate configuration that allows you to store a bit of memory.

                <svg id="rs_latch" width="400" height="120">
                </svg>
                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container('rs_latch');l.add_toggle_switch('s1', 10, 10);l.add_toggle_switch('s2', 10, 80);l.add_or('o1', 70, 10, true);l.add_or('o2', 70, 60, true);l.add_led('l1', 170, 20);l.add_led('l2', 170, 70);l.connect('s1', 0, 'o1', 0);l.connect('s2', 0, 'o2', 1);l.connect('o1', 0, 'o2', 0);l.connect('o2', 0, 'o1', 1);l.connect('o1', 0, 'l1', 0);l.connect('o2', 0, 'l2', 0);l.run_forever(10);})`}} />

                {/*<!-------------  RS FLIPFLOP  -------------->*/}
                <h6 id='jk_flipflop_content'>RS FlipFlop</h6>

                The RS FlipFlop is the same as before but has a little extra to allow for a clock input, which only allows the data to change when the middle switch is on.

                <svg id="jk_flipflop" width="400" height="120">
                </svg>
                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container('jk_flipflop');l.add_toggle_switch('s1', 10, 10);l.add_toggle_switch('s2', 10, 80);l.add_toggle_switch('s3', 10, 45);l.add_and('a1', 70, 10, true);l.add_and('a2', 70, 60, true);l.add_and('a3', 170, 10, true);l.add_and('a4', 170, 60, true);l.add_led('l1', 230, 20);l.add_led('l2', 230, 70);l.connect('s1', 0, 'a1', 0);l.connect('s2', 0, 'a2', 1);l.connect('s3', 0, 'a1', 1);l.connect('s3', 0, 'a2', 0);l.connect('a1', 0, 'a3', 0);l.connect('a2', 0, 'a4', 1);l.connect('a4', 0, 'a3', 1);l.connect('a3', 0, 'a4', 0);l.connect('a3', 0, 'l1', 0);l.connect('a4', 0, 'l2', 0);l.run_forever(10);})`}} />



                {/*<!--------------------------------------  MUX/DEMUX  --------------------------->*/}


                <div style={{float:"left"}}><h1 id="mux">Multiplexer/Demultiplexer</h1></div>
                <div style={{float:"right"}}><a href="#top">top</a></div>
                <br />

                {/*<!-------------------------------------  ALU  ---------------------------------->*/}

                <div style={{float:"left"}}><h1 id="alu">ALU</h1></div>
                <div style={{float:"right"}}><a href="#top">top</a></div>
                <br />

                {/*<!-------half adder------>*/}
                <h6>Half Adder</h6>
                These gate configurations allow for adding bits together.  
                <pre>
                Inputs  Outputs
                0 + 0  =  00
                1 + 0  =  01
                0 + 1  =  01
                1 + 1  =  10
                </pre>

                <svg id="halfadder" width="400" height="100">
                </svg>
                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container("halfadder");l.add_toggle_switch('s1', 10, 20);l.add_toggle_switch('s2', 10, 60);l.add_or('x1', 80, 10, false, true);l.add_and('a1', 80, 50);l.add_led('l1', 160, 20);l.add_led('l2', 160, 60);l.connect('s1', 0, 'x1', 0);l.connect('s1', 0, 'a1', 0);l.connect('s2', 0, 'x1', 1);l.connect('s2', 0, 'a1', 1);l.connect('x1', 0, 'l1', 0);l.connect('a1', 0, 'l2', 0);l.run_forever(10);});`}} />

                {/*<!-------full adder------>*/}
                <h6>Full Adder</h6>
                The full adder allows carry bits which are necessary for multi-bit numbers.  It uses a new input called a "carry in" (sometimes abbreviated Cin).  Remember when you carry the 1 in addition?  It is the exact same concept.

                <svg id="fulladder" width="400" height="150">
                </svg>

                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){var l=new logic_container("fulladder");l.add_toggle_switch('s1', 10, 20);l.add_toggle_switch('s2', 10, 60);l.add_toggle_switch('s3', 10, 100);l.add_or('x1', 80, 30, false, true);l.add_and('a1', 80, 70);l.add_or('x2', 170, 10, false, true);l.add_and('a2', 170, 50);l.add_buffer('b1', 90, 120);l.add_or('o1', 240, 90);l.add_led('l1', 300, 20);l.add_led('l2', 300, 60);l.connect('s1', 0, 'x1', 0);l.connect('s1', 0, 'a1', 0);l.connect('s2', 0, 'x1', 1);l.connect('s2', 0, 'a1', 1);l.connect('x1', 0, 'x2', 0);l.connect('x1', 0, 'a2', 0);l.connect('a1', 0, 'o1', 1);l.connect('s3', 0, 'b1', 0);l.connect('b1', 0, 'x2', 1);l.connect('b1', 0, 'a2', 1);l.connect('a2', 0, 'o1', 0);l.connect('x2', 0, 'l1', 0);l.connect('o1', 0, 'l2', 0);l.run_forever(10);});`}} />

                I will be using abstraction for simplicity sake.  By this, I mean I will represent complex gate structures by a "black box", or a rectangle with inputs and outputs.  Notice how this does the same function as the full adder but is a lot easier to represent and understand.

                <svg id="fulladderbb" width="400" height="150">
                </svg>

                <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){
                var l=new logic_container("fulladderbb");l.add_toggle_switch('s1', 10, 20);l.add_toggle_switch('s2', 10, 50);l.add_toggle_switch('s3', 10, 80);l.add_custom('c1', 80, 30, 'Full Adder', 3, 2, [function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count%2==1;}, function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count>1;}]);l.add_led('l1', 220, 30);l.add_led('l2', 220, 70);l.connect('s1', 0, 'c1', 0);l.connect('s2', 0, 'c1', 1);l.connect('s3', 0, 'c1', 2);l.connect('c1', 0, 'l1', 0);l.connect('c1', 1, 'l2', 0);l.run_forever(10);}); `}} />

                {/*<!-------4 bit adder----->*/}
                <h6>4-bit Adder</h6>
                This shows how the full adders cascade the bits when used together.


                <svg id="4bitadder" width="400" height="300">
                </svg>

                <script dangerouslySetInnerHTML={{__html: `
                $(document).ready(function(){
                var l=new logic_container("4bitadder");
                l.add_toggle_switch('a1', 20, 20);
                l.add_toggle_switch('a2', 30, 50);
                l.add_toggle_switch('a3', 40, 80);
                l.add_toggle_switch('a4', 50, 110);
                l.add_toggle_switch('b1', 20, 150);
                l.add_toggle_switch('b2', 30, 180);
                l.add_toggle_switch('b3', 40, 210);
                l.add_toggle_switch('b4', 50, 240);
                l.add_custom('c1', 140, 10, 'Full Adder', 3, 2, [function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count%2==1;}, function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count>1;}]);
                l.add_custom('c2', 140, 75, 'Full Adder', 3, 2, [function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count%2==1;}, function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count>1;}]);
                l.add_custom('c3', 140, 140, 'Full Adder', 3, 2, [function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count%2==1;}, function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count>1;}]);
                l.add_custom('c4', 140, 205, 'Full Adder', 3, 2, [function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count%2==1;}, function(i){var count=0;for (var j=0;j<i.length;j++){if (i[j]){count++}};return count>1;}]);
                l.add_led('l1', 300, 20);
                l.add_led('l2', 300, 60);
                l.add_led('l3', 300, 100);
                l.add_led('l4', 300, 140);
                l.add_led('l5', 300, 220);
                l.connect('a1', 0, 'c1', 0);
                l.connect('b1', 0, 'c1', 1);
                l.connect('c1', 1, 'c2', 2);
                l.connect('a2', 0, 'c2', 0);
                l.connect('b2', 0, 'c2', 1);
                l.connect('c2', 1, 'c3', 2);
                l.connect('a3', 0, 'c3', 0);
                l.connect('b3', 0, 'c3', 1);
                l.connect('c3', 1, 'c4', 2);
                l.connect('a4', 0, 'c4', 0);
                l.connect('b4', 0, 'c4', 1);
                l.connect('c1', 0, 'l1', 0);
                l.connect('c2', 0, 'l2', 0);
                l.connect('c3', 0, 'l3', 0);
                l.connect('c4', 0, 'l4', 0);
                l.connect('c4', 1, 'l5', 0);
                l.run_forever(10);});`}} />



                {/*<!------subtractor------->*/}
                {/*<!------multiplier------->*/}




                <div style={{float: "left"}}><h1 id="layout">CPU Layout</h1></div>
                <div style={{float: "right"}}><a href="#top">top</a></div>
                <br />


                <div style={{float: "left"}}><h1 id="fin">Putting it all together</h1></div>
                <div style={{float: "right"}}><a href="#top">top</a></div>
                <br />





            </div>
       );
    }
}

export const component = Post;
export default Post;
