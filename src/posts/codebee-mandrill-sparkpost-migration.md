---
path: "/posts/leng"
title: "How I easily migrated CodeBee from Mandrill to SparkPost"
author: "Sunny Singh"
authorUrl: "https://sunnysingh.io/"
---

If you were using Mandrill for your email sending needs like I was, you may have been distraught about their [pricing change announcements](http://blog.mandrill.com/important-changes-to-mandrill.html). Basically, small startups like CodeBee could no longer take advantage of the free 100k emails per month plan. Thankfully, a great alternative exists called [SparkPost](https://www.sparkpost.com/) which welcomed users like myself with the same free plan of 100k emails. Here is how I migrated everything over.

Everything that you liked about Mandrill exists in SparkPost too, and I actually find their dashboard easier to navigate. Once you're signed in to SparkPost, they'll walk you through the setup process. When verifying your sending domain, I highly recommend using the SPF text and DKIM records because these also help prevent your emails from being marked as spam. This process should be the same as when you verified these records in Mandrill (via DNS records), and if you didn't then you're free to use the other verification methods.

The next step depends on what framework you're using or how you're implementing email sending in your application. For Laravel, I simply had to swap out my SMTP config in the `.env` file:

```
MAIL_DRIVER=smtp
MAIL_HOST=PUT_YOUR_SPARKPOST_HOST_HERE
MAIL_PORT=587
MAIL_USERNAME=SMTP_Injection
MAIL_PASSWORD=PUT_YOUR_SPARKPOST_API_KEY_HERE
```

You also have the option of using [SparkPost's API](https://developers.sparkpost.com/api/), which I assume is faster or offers more features. Since SparkPost isn't integrated into Laravel (yet), SMTP works well and you should be done at this point. Now all `Mail::send()`'s are using SparkPost.

Hope this migration tutorial helped someone out, and if it did let me know in the comments or [on Twitter](https://twitter.com/sunnysinghio).