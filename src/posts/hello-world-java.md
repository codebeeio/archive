---
path: "/posts/lm2p"
title: "\"Hello, World!\" in Java"
author: "Vrund Patel"
---

The first thing you do in any programming language is print out Hello, World!. So we are going to follow those conventions. Let’s get started:

1. Open the Java IDE, Eclipse.
2. Go to File –> New –> Java Project –> Enter the name of the Project, example MyFirstJavaProgram. After that, choose the location of the project to be saved, by default it is going to be saved in the workspace folder.
3. Next go to File –> New –> Class –> Enter the name of the class, example: HelloWorld.
You should see a basic class created by Eclipse.
```java
public class HelloWorld {
}
```
Next we will write the main method that will execute the program. So, we will type in the main method between the curly braces of the HelloWorld class.

```java
public class HelloWorld {
   
     public static void main(String [] args) {
 
     }
 
}
```

Next we will add some comments to our code so that when we come back to this program we know what it does. Comments are for humans and the computer ignores the comments. In Java, there are multiple ways to do comment.
```java
// By using two slashes you can create a line comment.
/* This is a
* multi - line comment
*/
```
Next we will print out the text to our console. In Java, we can print anything to the screen using the System.out.println(); method. Let’s take a look in the program that we created.

```java
public class HelloWorld {
  
  /* This program prints out 
   * Hello,World to the console.
   */
  
  public static void main(String[] args) {
    
    //To print out text to the screen you need to put the text between quotation marks.
    System.out.println("Hello,World!");
    
  }
}
```
After that, we need to compile the program. Java will not run if there is an error. There are three types of error in Java. They are as follows:

1. Compile Error: This error occurs when you are trying to compile the code, and Java is giving out an error. The program will not run without compiling
2. Runtime Error: This error occurs when the Java code is compiled, but when it runs it gives out an error. Most common example is dividing a number by 0.
3. Logical Error: This error is sometimes hard to find out because it will let you compile and run the code. It occurs mainly when there is a spelling mistake or a computational error.
- In Eclipse, click on the green button, at the top of Eclipse screen and looks like a play button, and this will run the program. And you should see a message printed out on the screen.

Happy Coding!