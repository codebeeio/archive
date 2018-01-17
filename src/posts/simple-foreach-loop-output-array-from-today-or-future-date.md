---
path: "/posts/l4w9"
title: "Simple foreach loop to output an array value only if it's from today or a future date."
author: "JD Tadlock"
---

Simple, but may come in handy for any beginners out there. ;)

So, let's say we have a multidimensional array with arrays of events inside. Example:
```
<?php 
$eventArray = [
  'events' => [
	[
	'title'		=> "Some Title Here",
	'date' 		=> "December 3rd, 2015",
	'speaker'	=> "John Smith",
	'description'=> "A brief description of event here"
	],
	[
	'title'		=> "Another Event",
	'date' 		=> "October 10th, 2016",
	'speaker'	=> "Brad Bradley",
	'description'	=> "Another brief description of event here. Bacon ipsum dolor amet rump kielbasa sirloin tenderloin, ribeye chicken drumstick brisket swine cupim. Shank pork belly leberkas hamburger, short ribs shoulder salami strip steak. Filet mignon tongue doner tenderloin kielbasa cupim meatloaf turducken kevin shank prosciutto ham hock meatball alcatra. Filet mignon turducken swine, pig chuck hamburger short ribs kevin venison. Kevin picanha leberkas pastrami ribeye andouille. Pancetta shank turkey, tongue ball tip pastrami chuck beef ribs. Landjaeger prosciutto tail, bresaola shank bacon ball tip beef salami ham hock tri-tip hamburger."
	],
	[
	'title'	        => "One More Event",
	'date' 		=> "November 12th, 2015",
	'speaker'	  => "Janet Wilson",
	'description'	  => "Yet another brief description of event here"
	]
];
?> 
```

This array could either be at the top of your page before the html content, or better yet saved into another file. Let's say we save it into another file in the same directory. Example: (EventsArray.php)
- Now at the top of the index.php file let's require it.

```
<?php 

require_once('EventsArray.php');

```

We will now use the PHP strtotime() function to convert today's date into a number.
The output would be a string "October 12th, 2015" using just the date() function.
When we wrap the date() function in the strtotime() function we get 1444633200.
We can use this to logically test if the date value in our array is greater than or equal to $today's value.

Below our require, let's create a variable and store today's date wrapped in the strtotime() function.
```
$today = strtotime(date('F jS, Y')); 

```
Let's close our php block and add the html header code for the page
```
?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Untitled</title>
        <style><!-- Some basic styles to make it look better than ugly -->
        	ul {
        		list-style: none;
        		background: #5389BB;
        		width: 300px;
        		padding: 20px;
        		color: #fff;
        		font-size: 1.075em;
        		font-family: 'Open Sans' sans-serif;
        		font-weight: 200;
        	}
			ul li {
				padding: 5px;
			}
			ul li:first-child {
				font-size: 1.7em;
			}
        </style>
    </head>
    <body>
```
Now, let's create our foreach loop. We'll iterate through the arrays and check the 'date' value to see if the number outputted is equal to or greater than $today's value. In our if() statement we'll use the strtotime() function once again to convert the 'date' value from the array into a number.
```              
		<?php foreach ( $eventArray as $events ) {
			foreach ( $events as $array => $key ) { 
				if ( strtotime($key['date']) >= $today ) { ?>
                    <ul>
					  <li><?php echo $key['title']; ?></li>
					  <li><?php echo $key['date']; ?></li>
					  <li><?php echo $key['speaker']; ?></li>
				      <li><?php echo $key['description']; ?></li>
					</ul>
		<?php } } } ?>

    </body>
</html>
```


Now, play around with the EventsArray and change some dates. As long as you keep the same format, you can make them any date you wish(ex. January 1st, 2016). If you change one of them to a past date, you'll see that the foreach won't output that event. Enjoy!









