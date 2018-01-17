---
path: "/posts/lVxR"
title: "Simple encryption and decryption"
author: "Ray Smith"
authorUrl: "https://github.com/raysmithdev"
---

Recently I had to build an app where the client wanted to see his password in the UI. My issue was that I was encrypting the password upon save to the DB. I had to find a way to decrypt the passwords so the client would see them visually.

This is when I found the awesome Crypt class that Laravel ships with :relaxed: 

To use this class you first of all have to import it in your controller like so

```
use Crypt;
```

Once we have imported the class we can now get started on encrypting and decrypting some data. So for example you are saving a user to the DB. You can now encrypt the password like so:

``` 
$data = Request::all();

$user = new User();
$user->password = Crypt::encrypt($data['password']);
$user->save();
```

Simple right, its that easy to encrypt a password using the Crypt class. Now lets say we retrieve this user and want to decrypt the data so we can visually show what the password is. No problem. All you have to do is like so:

```
foreach ($user as $row)
{
  Crypt::decrypt($row->password);
}
```

And that's all there is to it. In this little tutorial we have learned how to encrypt a password and also decrypt a password using the Crypt class provided from Laravel.

Hope this may help someone out and if you need anything else about this class please feel free to leave a comment.

Talk soon guys, Ray :relaxed: 