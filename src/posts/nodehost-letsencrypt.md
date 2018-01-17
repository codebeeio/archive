---
path: "/posts/pGZw"
title: "NodeHost now has a built in Let's Encrypt enable button"
author: "Anthony Rossbach"
authorUrl: "https://twitter.com/anthonyrossbach"
---

[www.nodehost.ca/articles/lets-encrypt](https://www.nodehost.ca/articles/lets-encrypt)

I have been asked so many times, so now it's built in and even works on the test domains. :heart_eyes: 

Here is the update from the NodeHost blog.

> It's time, Let's Encrypt is finally enabled and ready to be used. This is the number one feature request we have had. But remember this tool is new so might not always work.
> 
> Because of the API time that it takes Let's Encrypt to return the certificate information (up to 5 minutes in some cases), we had to force a timeout after 15 seconds on the API function. This makes it so that the panel after you click enable will not be forced to wait up to 5 minutes but rather a max of 15 seconds. The panel will then give you a message telling you it's in progress.
> 
> Because SSL is important all sites now in the panel will show a warning message when you have a site with NO SSL installed. SSL is important to making the internet safe and secure.