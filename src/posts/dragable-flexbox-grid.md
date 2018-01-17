---
path: "/posts/pB0b"
title: "Dragable Flexbox Grid"
author: "Rando Hinn"
authorUrl: "https://randohinn.com/"
---

## What
In the process of writing my CMS sideproject, I recently encountered the need to have a drag-and drop system, that would work seamlessly with [Flexbox Grid](http://flexboxgrid.com/)'s automatic width columns. I tried 4 different libraries, but none worked. Frustrated, I then turned to the _eternal shrine of truth_ for all developers - Stack Overflow, where in the JS chatroom, I wrote something like this:

>  Does a library exist, that allows drag and drop on a [Flexbox Grid](http://flexboxgrid.com/) Auto Width grid? Tried gridster and similar, couldn't get it to work.. Now dabbing at jQuery UI 

As you can see, I was onto jQuery by the time I wrote that - pretty desperate, I know. Within 5 minutes, a guy by the name of Ben Fortune replied back:

> Try dragula

So I did. And guess what - it works straight out of the box! Couldn't be more happier

## How

So, [Dragula](https://bevacqua.github.io/dragula/) is a cool open-source drag and drop library that's one of the easiest to set up, that I've seen. Contrary to many others, it does not have useless bells and whistles - it doesn't even have a pixel grid system like many others do, but that's what makes it awesome - All I need to do is to is provide it with the container elements, and drag and drop of their children between them will **just work**. Even with the automatic width grids, that I want to use for easier layout creation. 

## Example

http://codepen.io/randohinn/pen/EyBqAK