---
path: "/posts/7ar5"
title: "Using CSS Modules with React"
author: "Sunny Singh"
authorUrl: "https://sunnysingh.io/"
---

On a recent project, [devnews](https://devne.ws/), I decided to organize my CSS using something called [CSS Modules](https://github.com/css-modules/css-modules). Since I was using React to organize my app into separated components, it made sense to do the same with my CSS.

# Why CSS Modules?

Breaking up code into modules follows the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle). Code becomes easier to manage and debug when each piece has a single goal.

CSS is fundamentally broken since everything goes into the global scope. As we know from programming, global variables are (typically) bad. This is not just something that I'm blindly following, because I've worked on big projects with large CSS architecture (CodeBee as a primary example) and it becomes extremely hard to debug a design when there are so many overrides. When each piece of UI is broken up with its own non-global CSS, it becomes much easier to see what is happening.

Before I go on, keep in mind that yes, you *can* use things like [BEM](http://getbem.com/) to solve the same problem. This is not a competition and you can use whatever you want, but I do feel like CSS Modules is a cleaner approach.

## How It Works

The basic idea is that you can import your styles into a React component, and use it as a plain JavaScript object. Here's a snippet (this is [ES2015](https://babeljs.io/docs/learn-es2015/) syntax):

```
import React from 'react';
import styles from './Header.css';

class Header extends React.Component {

  render () {
    return (
      <div className={styles.logo}>
        devnews
      </div>
    )
  }

};

export default Header;
```

What is happening here is that I am importing the styles (more specifically, the classnames) from a separate `Header.css` file. This is really convenient because the CSS file lives in the same folder as my React component, `Header.js`, which makes sense considering how closely related they are. The classnames can then be referenced via the `styles` object.

The magic in this is actually the fact that all the classnames are not in the global scope, hence why you have to reference them via an object. This means that you can have a `.container` class, `.active` class, etc. and not have to worry about these classnames colliding with same-named ones from other CSS files. What happens under the hood is that the classnames get prefixed with the component's name automatically. If you do need to create a global classname, you can do so like this:

```
:global .active {
  color: red;
}
```

The other cool part about CSS Modules is being able to share styles between components. This is done like so:

```
/* shared.css file */
.baseBtn {
  border: 1px solid #000;
}

/* Header.css file */
.newBtn {
  composes: baseBtn from "../shared.css";
}
```

If the shared style is in the same file, you can also just provide the classname:

```
.newBtn {
  composes: btn;
}
```

This is essentially the same concept as mixins or extends from CSS preprocessors such as Sass and Less.

## Setting It Up

There are multiple integrations of CSS Modules. PostCSS offers a plugin ([postcss-modules](https://github.com/outpunk/postcss-modules)) which can export the classnames into a JSON file to be used in templating languages. I personally used the built-in CSS Modules integration in [webpack](http://webpack.github.io/). I find this to be the easiest way to get started, especially considering that webpack is commonly used in React projects.

Within your `webpack.config.js`, add the following loader for CSS:

```
{
  test: /\.css$/,
  loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
  exclude: [/node_modules/],
},
```

And that's it. Now any `.css` file will be locally scoped. Keep in mind that you can't have dashes in your classnames unless you use array syntax in your JavaScript. While I normally use dashed-lowercase naming for my classnames, I didn't find it to be a big deal in switching to underscored_camelCase. Keep in mind that there's also a [React-specific integration](https://github.com/gajus/react-css-modules) that solves these problems.

For real-life examples, you can check out the components folder in the [devnews GitHub repo](https://github.com/devnews/web/tree/master/src/components).

## Your Thoughts?

Let me know if you like CSS Modules and if you'd use this in your own projects by leaving a comment or [tweeting me](https://twitter.com/sunnysinghio).