import React from "react";

export const title = "How binary numbers work";
export const date = new Date("2015-01-17 23:46:57");
export const published = false;
module.exports.public = true;

export const preview = (
    <div>
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
                    To understand binary numbers it is helpful to first know how a number system works.  A number system is a way to represent numbers using symbols.  The most common number systems use both symbols and columns.  
                </p>
                <p>
                    In our deimal number system, we use 10 different symbols to represent numbers and however many columns we need.  Some examples with 1 column are 2, 6, 0.  Some examples with 2 columns are 06, 16, 84, 99. 3 columns are 003, 017, 099, 184, 892, etc.  
                </p>
                <p>
                    If you were limited to a certain number of columns, the number of numbers you could represent is calculated with the formula b<sup>c</sup> where b is the number of possible symbols and c is the number of columns.  In decimal, if we have 10 symbols, a=10.  If we pick 2 columns, we get 10<sup>2</sup>, which is 100.  This is easy to see because we have the numbers 0-99.  
                </p>
                <p>
                    In binary, we have this same system, except there are only 2 symbols, 0 and 1.  This same formula work with binary numbers, where a=2.  if we have 2 columns, we would have 2<sup>2</sup>, which is 4.  The 4 different numbers are 00, 01, 10, 11.
                </p>

                <p>
                    Now, how do we calculate what a binary number is in decimal?  To calculate what a number is at a specific position the formula used is a*b<sup>c</sup>, where b is the number of possible symbols, c is the column position, and a is the number at the chosen column position.  
                </p>
                <p>
                    It is important to note that the positions start at 0, not 1.  So for position 1 of 835, we would get 3*10<sup>1</sup>, which is 30.  To calculate the whole number, you would sum each column with this formula.  So 8*10<sup>2</sup>+3*10<sup>1</sup>+5*10<sup>0</sup> = 835.  Not very interesting in decimal, but it is important in binary.
                </p>

                <p>
                    Using this formula in binary, we can calculate what any number is.  For 10101, the formula would give 1*2<sup>4</sup>+0*2<sup>3</sup>+1*2<sup>2</sup>+0*2<sup>1</sup>+1*2<sup>0</sup> = 16+0+4+0+1 = 21.
                </p>
                <p>
                    The 'a' variable in the formula becomes a bit redundant seeing as it's either 0 or 1 but it's still good practice to keep it.
                </p>

                <p>
                    Now, how do we add numbers?  
                    First, let's start with just incrementing numbers. In decimal, we increment a column until 
                </p>


            </div>
       );
    }
}

export const component = Post;
export default Post;
