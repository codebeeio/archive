---
path: "/posts/DMzw"
title: "Quick Tip: Open Atom Projects Faster on OS X (Command Line)"
author: "Sunny Singh"
authorUrl: "https://sunnysingh.io/"
---

I really love GitHub's [Atom editor](https://atom.io/), but it can be really slow when it comes to opening project folders with the `atom` command. I want to share an alternative command that accomplishes the same thing but a lot faster.

The normal way:
```
atom MyProjectFolder
```

The alternative "fast" way:
```
open -a /Applications/Atom.app MyProjectFolder
```

The alternative approach can't do as much as the `atom` command, but for this use case it's a lot faster. However, it's a lot more to type so let's [create an alias](https://codebee.io/posts/pYOV) for it:

```
atm () {
    open -a /Applications/Atom.app $1
}
```

Now you can simply type:

```
atm MyProjectFolder
```

Voila! It's not only faster, but actually one character shorter.