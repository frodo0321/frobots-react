import React from "react";

export const title = "Emulating Ruby's string interpolation in Python";
export const date = new Date("2016-01-27 08:00:18");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            I've been learning Ruby recently and, honestly, I prefer python over it in every way.  Except for the string interpolations.  And I'm not going to use Ruby over python only for this, so I decided to figure out how to give python that same ability.  
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

                Python's namespaces are stored as dicts where each key is the variable name and the value is the object or value that variable represents.  The way I know to access this dict is by accessing the __dict__ class variable from an object.

                <pre className="code">{`>>> import math
>>> print math.__dict__

{'pow': &lt;built-in function pow>, 'fsum': &lt;built-in function fsum>, 'cosh': &lt;built-in function cosh>, 'ldexp': &lt;built-in
function ldexp>, 'hypot': &lt;built-in function hypot>, 'acosh': &lt;built-in function acosh>, 'tan': &lt;built-in function tan>,...}`}
                </pre>

                So how do we access our namespace?

                In the interpreter for the global namespace, using 
                <pre className="code">{`>>> from __main__ import __dict__ as ns`}
                </pre>

                <p>
                works (although it's kinda ugly and doesn't work for the local namespace)
                </p>

                <pre className="code">{`>>> print ns
{'__builtins__': &lt;module '__builtin__' (built-in)>, '__package__': None, '__name__': '__main__', 'ns': {...}, '__doc__':
 None, 'math': &lt;module 'math' (built-in)>}
 >>> x=5
 >>> print ns
 {'__builtins__': &lt;module '__builtin__' (built-in)>, '__package__': None, <b>'x': 5</b>, '__name__': '__main__', 'ns': {...}, '_
 _doc__': None, 'math': &lt;module 'math' (built-in)>}`}
                </pre>
                So when a new variable is declared it does show up here.
                After doing some more research I found a way better way.  Python has builtin functions for accessing both the local and global namespaces
                <pre className="code">{`>>> #access local namespace
>>> locals()
>>> #access global namespace
>>> globals()`}
                </pre>
                <p>
                    so instead of using that weird import hack with __main__, we can just use locals().
                </p>


                <p>
                    So now that we have accessed the namespace, now what?
                    Python has a builtin function for strings called "format" which is similar to the way Ruby does string interpolations.  The only issue is all you can do is pass variables to it, so no running code inside strings :(.
                </p>

                <p>
                    Format works as follows:
                </p>
                <pre className="code">{`>>> print "Hello {}!".format("world")
Hello world!
>>> #also works for object variables
>>> print "e={0.e} pi={0.pi}".format(math)
e=2.71828182846 pi=3.14159265359
>>> #as well as with keyword arguments
>>> print "{x} + {y} = {ans}".format(x=2, y=5, ans=7)
2 + 5 = 7`}
                </pre>

                <p>
                    No now all we have to do is pass the locals() function into the format function and we have access to all the variables in our current namespace.
                </p>

                <pre className="code">{`>>> x=6
>>> y=2
>>> "{x} + {y} = {}".format(x+y, **locals())
'6 + 2 = 8'`}
                </pre>

                <p>
                    the ** is unpacking the dictionary.  Instead of passing a dictionary to the python arguments we need it to be the keyword arguments.  
                </p>

                <pre className="code">{`>>> def f(*args, **kwargs):
...     print "Arguments: {}, Keyword arguments: {}".format(args, kwargs)
...
>>> f({'x':3, 'y':8})
Arguments: ({'y': 8, 'x': 3},), Keyword arguments: {}
>>> f(**{'x':3, 'y':8})
Arguments: (), Keyword arguments: {'y': 8, 'x': 3}
>>> f(x=3, y=8)
Arguments: (), Keyword arguments: {'y': 8, 'x': 3}`}
                </pre>

                <p>
                    So in the first call, the *args receives a dictionary.
                    In the second call, the **kwargs receives them as desired.
                    And the third function call is what is normally used for passing keyword arguments.
                </p>

                <p>
                    So after all that, we can now pretty easily print out variables using the locals() and the format() functions along with some python magic.
                </p>


            </div>
       );
    }
}

export const component = ComputerVisionSecuritySystem;
export default ComputerVisionSecuritySystem;

