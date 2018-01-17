---
path: "/posts/poa6"
title: "How To Fix Mac Slowdowns"
author: "Sunny Singh"
authorUrl: "https://sunnysingh.io/"
---

I am writing this because I recently had a lag/slowdown issue after updating OS X to 10.10.5. This made my machine completely useless for any coding purposes which is obviously counterproductive and extremely frustrating. I want to share how I was able to find the issue in case anyone else is having slow OS problems.

## Safe Mode

You can boot your Mac into safe mode by holding the shift key after your hear the startup sound. You can release it once the progress bar comes up. If everything is running fine in safe mode, then this means that an application is probably the cause of the slowdown. If not, then this might be a hardware issue.

## Console Logs

The first thing that you might try to do is to disable or uninstall apps. This didn't work for me, so I then found out about the Console app. You can find this app in Utilities, or simply launch it through Alfred/Spotlight (make sure that you do this in a normal boot now, _not_ safe mode). Click on `system.log` in the log list on the left (click Show Log List if this is hidden), and then click on Clear Display. Now, try to do anything that causes the system to lag or slowdown. In my case, simply clicking an icon in the menubar causes the beachball of death to show up, and then the following log comes up:

```
Sep 26 00:00:01 MacBook-Pro com.apple.xpc.launchd[1] (com.github.GitHub.Conduit[758]): Could not find and/or execute program specified by service: 149: Could not find a bundle of the given identifier through LaunchServices: com.github.GitHub.Conduit
```

GitHub Desktop (or potentially the old GitHub for Mac) was one of the apps that I uninstalled, but it looks like there was a service that kept trying to run. You can tell by the identifier shown in the log: `com.github.GitHub.Conduit`. To remove it, run the following command via the terminal:

```
launchctl remove com.github.GitHub.Conduit
```

## Worked?

This solved any lag issues that I had after the update. In fact, my Mac is a ton faster now so it might be worth checking your logs if you're having any sort of lag issues at all. Let me know if this worked for you.