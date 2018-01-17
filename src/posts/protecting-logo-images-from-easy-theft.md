---
path: "/posts/7AxX"
title: "Protecting your logo/images from \"easy\" theft"
author: "CodyL"
---

I'm not claiming that this will prevent it completely, it is easy to get around if you know how to use the developer's console and look through the element's CSS, or they can simply take a screenshot. But what this will do is help prevent from **easy** theft, by making it impossible to just right click on the image and view/download it the original image from there.

The bulk of this very small protection is all CSS, if you have any general knowledge of HTML and CSS this should be a piece of cake and probably seems like a dumb thing to make a tutorial about of on a site of developers, I agree :P. The only thing you need to prepare for in the HTML is make a DIV box and name it whatever you'd like via Class or ID. In this example I named my div "#logo".

### The CSS:

```
#logo {
   width:600px;
   height:400px;

} #logo::before {
   content: " "; 
   background-image:url(http://dummyimage.com/600x400/000/fff);
   display:block; 
   height:100%;
}
```

### Explanation:

**With #logo** you are setting the size of your image, that's it. 

**With #logo::before** you're creating a pseudo element, an element that you can't interact with and as the selector suggests this element will be over the main #logo element, I could have just as easily chosen to use the ::after selector and put the image behind it but I wanted to show the proof that this does in fact work the way I'm claiming.

**Inside of #logo::before** as you do with this type of element you will put a "content" property, to make the element visible. Even if you set a size and background this needs to be in place for the element to show up. Inside of "background image" will be where you place your logo or image. you can place any sizing, positioning and repeat rules as you like just like a normal background image. With display block it will allow me to resize the element to the size i'd like, and as block will span the element across 100% we only need to set the height.

And that's all folks. Here is the fix in action:

[With the fix](http://i.imgur.com/PJ8yuMA.png)

[And Without](http://i.imgur.com/6IkSEMv.png)

And of course this is not the only fix, and in ways it could be more difficult, or inconvenient depending on how you're using the images, another way could be simply using an image tag, and placing a element on top of it with a repeating 1x1 transparent pixel which is the current norm, but I thought I'd show you something different. 

Even if you don't find this useful, I thank you for taking the time for reading it. Have a great day.