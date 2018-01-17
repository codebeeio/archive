---
path: "/posts/lbYD"
title: "Laravel 5 exclude some routes from CSRF protection"
author: "Ray Smith"
authorUrl: "https://github.com/raysmithdev"
---

Hey everyone,

So here it goes my first contribution to this awesome site :relaxed: If you are building an API for third party apps you may have run into the issue regarding > TokenMismatchException in VerifyCsrfToken which can be a pain.

I am going to show you how to quickly avoid this issue. Although this is an awesome feature from Laravel out of the box as it adds extra security to your app. So let's get on with it enough blabbing on already Ray lol

First things first lets create a new file in App\Http\Middleware. I am going to call mine VerifyCsrfMiddleware.php and paste the following code in there

```
<?php namespace App\Http\Middleware;

class VerifyCsrfToken extends \Illuminate\Foundation\Http\Middleware\VerifyCsrfToken {

}
```

Now let's add the following method to this file

```
public function handle($request, Closure $next)  
{
    if ($this->isReading($request) || $this->excludedRoutes($request) || $this->tokensMatch($request))
    {
        return $this->addCookieToResponse($request, $next($request));
    }

    throw new TokenMismatchException;
}
```

Next add 

```
protected function excludedRoutes($request)  
{
    $routes = [
            'some/route/path',
            'users/non-protected-route'
    ];

    foreach($routes as $route)
        if ($request->is($route))
            return true;

        return false;
}
```

In the code above you can place an array of routes which you would like to be avoided from CSRF protection.

Thats it but we now need to tell Laravel to use our new code.Let's navigate to App/Http/Kernal.php and change 

```
'App\Http\Middleware\VerifyCsrfToken'
```

to your new class.

So that's it. Simple enough eh. Now you should be able to post requests to your app from a third party app and start posting and getting data that you need. Awesome stuff :) 

Any issues or any suggestions to do this a better way please don't be shy. Leave a comment.

Peace out, Ray :relaxed: 