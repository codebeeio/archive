---
path: "/posts/pYOV"
title: "Creating Command Aliases: Speed up your terminal workflow."
author: "Sunny Singh"
authorUrl: "https://sunnysingh.io/"
---

If you're fairly new to the terminal/CLI (command-line interface), then chances are that you're typing out or copying-and-pasting commands whenever you need to do something. Not only are a lot of commands hard to remember, but you also end up wasting time. If you have a list of commands that you use on a daily basis, then you can save yourself some time by creating aliases. This tutorial will work for both Linux and OS X.

## Editing the `.bash_profile` file

I prefer to keep track of the commands that I've aliased, so the best way to do that is by editing the `.bash_profile` file in your user folder. You can do so by typing the following command:

```
nano ~/.bash_profile
```

Note that I'm using nano, a simple command-line editor. The `~` part simply finds the file within your user folder (`/Users/Sunny` on OS X for me). You are free to find this file through your file explorer and editing it within your preferred editor.

Once you're editing the file, simply place each alias on its own line with the following format:

```
alias proj='cd ~/Code/Project'
alias build='proj && gulp'
```

You can save this file in nano by pressing `ctrl+w` and then `y`. Unfortunately you also need to make bash recognize these new commands, so you have to type the following in your terminal to reload it:

```
. ~/.bash_profile
```

You can actually alias that command to something like "savealiases" to make things easier. With these example aliases, you can now type `proj` to go to the `Code/Project` folder (relative to your user folder). You can also see how to use previously-aliased commands in new commands, such as the `build` alias (which switches to your project folder, and runs gulp).

## List of useful aliases

You can be as creative as you want with writing aliases, and it depends on your workflow. However, here are some ideas you might find useful:

```
# Manage Aliases
alias editaliases='nano ~/.bash_profile'
alias savealiases='. ~/.bash_profile'

# SSH Into Remote Server
alias server='ssh root@12.34.567.891'

# SSH Into Local Vagrant Machine
alias vm='ssh vagrant@127.0.0.1 -p 2222'

# Clear Terminal Screen
alias c='clear'

# Shortcuts to directory switching
alias ..='cd ..'
alias ...='cd ../../../'
alias ....='cd ../../../../'
alias .....='cd ../../../../'
```

## Level-Up Your CLI Game

If you use a terminal every day, then you probably want to improve your workflow to be as efficient as possible. For that, I highly recommend [Oh My Zsh](http://ohmyz.sh/) which lets you add themes and plugins. I will do a tutorial on this in the future, along with porting over your aliases to Oh My Zsh.

There are also a bunch of people that share their terminal setups at [dotfiles.github.io](http://dotfiles.github.io/) if you want to get into this further.