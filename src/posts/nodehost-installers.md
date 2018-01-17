---
path: "/posts/p983"
title: "Offloading installers to Github for NodeHost"
author: "Anthony Rossbach"
authorUrl: "https://twitter.com/anthonyrossbach"
---

So I tonight just moved over the installer ZIP's that where sitting in the main server  folder /installers/projectname.version.zip into Github. This makes it so I can easily build in a  Repository auto publish option into the panel, allowing a user to paste in a repo link and having it clone onto the site just made.

You can see them here [https://github.com/NodeHostCA](https://github.com/NodeHostCA)

and the idea is to move more projects in and be able to auto add them to the site installer tool. This will allow me to bring in people to the Org on Github to add more project sources.

I will post more here tomorrow on how I am deploying, (downloads one server, ftp over to client node server, then drops in as a zip, with 2 php files, user visits the site and it unzips and set's everything up path wise).

I can't wait to share my last 6 hours of confusion and setup to make this auto deploy system work as it should. But for now good night.