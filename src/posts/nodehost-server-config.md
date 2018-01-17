---
path: "/posts/lE1A"
title: "How I am handling server config file updates at scale for NodeHost"
author: "Anthony Rossbach"
authorUrl: "https://twitter.com/anthonyrossbach"
---

I started building NodeHost to scale anywhere and the first task was commands on startup of a new node or on changes, I decided to just create a SH file on the web server that will be fetched every 5 hours by each server and run. The command edits config files for php, apache, vestacp, and more. If the changes are not needed it wont run the changes, this way updates that break modifications will be re applied.

Here is how to add a fetch ssh file and run as a cron command.

```
curl http://www.nodehost.ca/pathhere/commandfilename.sh > commandfilename.sh && bash commandfilename.sh
```