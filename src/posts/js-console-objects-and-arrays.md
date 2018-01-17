---
path: "/posts/DNdb"
title: "JS: Console output objects and arrays, the pretty way."
author: "Rando Hinn"
authorUrl: "https://randohinn.com/"
---

### Introduction

Here's something that I personally learned a couple of weeks ago, and even many full-time front end devs do not know- there's a better way to outputting arrays and objects in the browser console, than `console.log`. And it comes natively in most modern browsers.

### What is it?

It's `console.table`! A commonly not known feature of the browser console. MDN says
so: 

> Displays tabular data as a table.

What's this tabular data? Arrays or Objects, of course!

Due to being not very much used, many front end developers are finding it currently from [Wes Bos' ES6 For Everyone course](https://es6.io), even though it has no relation to ES6.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">First thing learned via <a href="https://twitter.com/hashtag/ES6?src=hash">#ES6</a> for Everyone isn't even related to ES6:<br><br>  console.table( someArrayOrObject );<br><br>Super cool! <a href="https://twitter.com/hashtag/JavaScript?src=hash">#JavaScript</a> <a href="https://twitter.com/wesbos">@wesbos</a></p>— Thorsten Frommen (@thorstenfrommen) <a href="https://twitter.com/thorstenfrommen/status/757889292094083072">July 26, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### Examples

Alright, say we have an array of objects and want to output it to the console. We'll do it both ways and compare the results to see what's easier to work with. I'll keep it ES5, for the sake of wider understanding

```javascript
var awesomeArray = [
    {
        firstName: "John",
        lastName: "Doe"
    }, 
    {
        firstName: "Jane",
        lastName: "Doe"
    },
];

// How we've always done it
console.log(awesomeArray);

// The new cool way
console.table(awesomeArray);
```

Here's what `console.log` results in - buck standard Object notation.

![Console.log](http://puu.sh/qv0Jb/04550d1dbf.png)

And here's what `console.table` gives. Look how much nicer that is

![Console.table](http://puu.sh/qv0Mg/f583f1b419.png)

_As far as the internet suggests, it should be able to do plain string arrays, and plain objects aswell, I had no luck. If you do, please post in the comments!_