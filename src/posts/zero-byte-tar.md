---
path: "/posts/7334"
title: "0 Byte TAR file infinite creation, weird bug I found."
author: "Anthony Rossbach"
authorUrl: "https://twitter.com/anthonyrossbach"
---

Yea it's crazy and a true 0 byte TAR file. I have no idea how this works, but I think it's exporting it's manifest for the file because there is not a single byte of content, so exporting headers, and when you unzip that header zip it recreates it based on the header information, and the loop begins again. https://www.youtube.com/watch?v=Y-HBpTSJbJQ