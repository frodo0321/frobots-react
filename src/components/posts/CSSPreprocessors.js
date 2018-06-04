import React from "react";

export const title = "Comparing CSS Preprocessors";
export const date = new Date("2018-06-02T14:39:26-07:00");
export const published = false;
module.exports.public = true;


class CSSPreprocessors extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        let preview = (
            <div>
            </div>
        );

        return (
            <div className="post-content">
                {preview}

                Writing css can be very annoying so I decided I was going to choose a css preporcessor to use to help clean up all of my css files.
                I've used Sass at a previous company I worked at and, compared to regular css, was significantly better.  Two of the biggest advantages I like with it were:
                <ol>
                    <li>Nesting: the fact I didn't have to write a new css rules for each style I want, I could just have multiple definitions, I could just put multiple rules in a single indent uner a rule, and</li>
                    <li>Variables: instead of having to change, say, a width rule in a million different places, I could just make a single variable that contains it and reference it everywhere I needed it.  Then if I change it, every reference gets updates.</li>
                </ol>

                But there are 3 main css preprocessorts it seems, 
                <a href="https://sass-lang.com/">Sass</a>
                <a href="">Less</a>, 
                <a href="">SCSS</a>, and 

                Sass is basically enhanced css that uses indents instead of brackets, so sort of reminds me of python syntax.
                Less is just enhanced css, and
                SCSS is apparently css with enhancements, that doesn't need a preprocessor to work.

                I don't feel like going over all the little differences of each because there are already a thousand different blog posts of people who did do that. like <a href="https://www.slant.co/versus/763/764/~less_vs_sass">this site</a>

                I couldn't find too much info on scss, a bunch of blog posts comparing it to sass, but no organization website at all which is weird.  So that might be out of the picture, because one thing I value in a tool or framework or whatever is a big community behind it.

                For my application of creating react apps which are very componentized, only a few of the feature are really important to me such as nesting, variables, and community.  Everything else doesn't matter too much, or so I think right now.

                Just based on syntax alone I like less better because for whatever reason I'm a bit turned off by having to use indenting, which doesn't make much sense since I indent code anyways.

                And apparently in regards to compile time, sass takes an order of magnitude longer, which is a huge turnoff for me since I greatly value quick built-test cycles.  
                <div className="quote">
                    "When compiling the same 200kb file, LESS compiled in 0.5 seconds and Sass took 4.9 seconds so there’s definitely a clear winner, but there’s many ways to improve the performance of both."
                </div>
                - <a href="https://www.kolodo.com/journal/less-vs-sass">https://www.kolodo.com/journal/less-vs-sass</a>
                I've had to work on massive monolith systems which took 30+ seconds to compile every time I made a small change to the code which wasted so much time.

                <h3>Conclusion</h3>
                After reading through donzens of articles and posts, the winner is Sass.
                The only two downsides are long compile time and syntax (not sure if this is even a downside or just personal) which I think are outweighed by the biggest upside in my opinion of having a large community.  That way I know if I ever need support or if there are any bugs or whatever, there will almost always be some solution out there, which I think will save me a ton of time down the road.  
                As for the long compile time, that should be able to be improved by doing it smartly, like only compiling when a change happens and things like that.  I'm sure theres a ton of tools out there that can do that already.

                <h4>*Update*</h4>
                When actually starting to use node-sass, it turns out it compiles both .sass and .scss formats which solves the annoying syntax issue.  Another win I guess!
                Just messing around with the compiler a bit:
                <pre className="code">{`
> var css = sass.renderSync({data: "$primary-color: green;$secondary-color: blue; .test {background-color: $primary-color;.a {background-color: $secondary-color;width: 5px;.b {font-weight: 500}}}", outputStyle: "expanded"}).css.toString()
> console.log(css)
.test {
  background-color: green;
}

.test .a {
  background-color: blue;
  width: 5px;
}

.test .a .b {
  font-weight: 500;
}

                `}</pre>
                Pretty cool!

                <p>
                    A few notible resources:
                </p>

                <a href="https://www.sitepoint.com/whats-difference-sass-scss/">https://softwareengineering.stackexchange.com/questions/181536/are-there-any-advantages-of-sass-over-less</a>
                <a href="https://www.keycdn.com/blog/sass-vs-less/">https://softwareengineering.stackexchange.com/questions/181536/are-there-any-advantages-of-sass-over-less</a>
                <a href="https://softwareengineering.stackexchange.com/questions/181536/are-there-any-advantages-of-sass-over-less">https://softwareengineering.stackexchange.com/questions/181536/are-there-any-advantages-of-sass-over-less</a>


            </div>
       );
    }
}

export const component = CSSPreprocessors;
export default CSSPreprocessors;
