---
path: "/posts/lKqG"
title: "angular-decamel-filter"
author: "Trevor Fountain"
authorUrl: "http://texasexpat.net/"
---

[github.com/doches/angular-decamel-filter](https://github.com/doches/angular-decamel-filter)

An AngularJS filter (with no external dependencies) for converting
camelCaseStrings to "Camel Case Strings". Useful for quickly converting
programmer-friendly keys to user-facing labels; I use it for creating
on-the-fly table headers.

## Getting Started

**(1)** Install using [Bower](http://bower.io/):

```
bower install angular-decamel-filter
```

**(2)** Include `angular-decamel-filter.js` in your index.html, somewhere after Angular itself.

**(3)** Add `te.decamel` to your main module's list of dependencies.

When you're done, your setup should look something like:

```
<!doctype html>
<html ng-app="myApp">
<head>

</head>
<body>
    ...
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0/angular.min.js"></script>
    <script src="bower_components/angular-decamel-filter/src/angular-decamel-filter.js"></script>
    ...
    <script>
        var myApp = angular.module('myApp', ['te.decamel']);
    </script>
    ...
</body>
</html>
```

## Usage

Use `decamel` like you would any other string filter:

```
// scopeVariable is "fooBarBaz"
<h1>{{scopeVariable | decamel}}</h1>
```

...to produce human-friendly output:

```
<h1>Foo Bar Baz</h1>
```

Want finer-grained control over your dedromedization? You can specify a custom delimiter, or disable initial capitalization:

```
<h1>{{scopeVariable | decamel:'_':true}}</h1>
```

...produces:

```
<h1>foo_Bar_Baz</h1>
```