Simple CSS Plugin for Jenkins
==============================
A plugin for Jenkins that supports custom CSS.
This was lifted from https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin

This is almost the same thing - but only supports CSS injection. JS injection in
some cases is a security risk - which is why I made this one for those environments.


Examples
------------------------------
There is a great example <a href="https://github.com/hawkfalcon/jenkins-clean-theme/">here</a>
You can also point it to this one: 	
	
		https://s3.amazonaws.com/cloudbees-downloads/jenkins-styles/blue-ish.css

Which is an adaptation with custom icons and more.



Author
------------------------------
* @mallowlabs
* @michaelneale (stole it from the above, who built the simple theme plugin)


Building
------------------------------

To Try:
    $ mvn hpi:run

To Build:
    $ mvn package

You will get target/*.hpi .

License
------------------------------
The MIT License (MIT)
Copyright (c) 2011 mallowlabs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

