---
path: "/posts/pQyZ"
title: "Using a SH file command to replace text in a file."
author: "Anthony Rossbach"
authorUrl: "https://twitter.com/anthonyrossbach"
---

```
echo "JOB: Checking for file replacement for php limit"
string="php_admin_value memory_limit 32M"
stringnew="php_admin_value memory_limit 64M"
grep "$stringnew" /usr/local/vesta/data/templates/web/apache2/hosting.tpl || sed -i "s/$string/$stringnew/g" /usr/local/vesta/data/templates/web/apache2/hosting.tpl
echo "JOB: Complete"
```

This is the one used for NodeHost (only part). It fetches the file, and finds the old line and replaces it.