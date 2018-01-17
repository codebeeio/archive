---
path: "/posts/pG9D"
title: "Simple grayscale SASS mixin"
author: "Rafael Santos"
---

Many many times, we look on the web for a simple way to give a black and white filter to images, with pure css. Now that SASS and other prepocessors are getting bigger and bigger, everyone starts to look how to do this with SASS. In this example I will give you the code with SCSS extention, since its becoming more popular then the first syntax.

```scss
@mixin grayscale_element($value) {
    -webkit-filter: #{"grayscale(#{$value})"};
    -moz-filter: #{"grayscale(#{$value})"};
    filter:#{"grayscale(#{$value})"};
}

.grayscale {
    @include grayscale_element(100%);
    transition: all 200ms ease-in-out;
    &:hover {
        @include grayscale_element(0);
    }
}
```

As you can see, first we declare the mixin, I’ve named it grayscale_element. What we do next is just create the class to use in the html, grayscale seemed a proper name. Next, include the mixin we created before and add a value of 100% , this means that the element with class `.grayscale` will be fully desatured. Thats why we are using it on hover with 0, meaning that when you hover in the element, you will get its original colors with a smooth transition.

Your preprocessor compiler, will output something like this:

```scss
.grayscale {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: all 200ms ease-in-out;
}

.grayscale:hover {
    -webkit-filter: grayscale(0);
    -moz-filter: grayscale(0);
    filter: grayscale(0);
}
```

Now, for the final touch you just have to apply it to some image, by doing the following:

```html
<img src="path/to/image.jpg" class="grayscale" />
```

So this how you use a SASS mixin to give your images a grayscale effect.