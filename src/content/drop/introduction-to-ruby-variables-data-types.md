---
title: Introduction to Ruby - Variables & Data Types
tags:
  - codecademy
  - ruby
  - study
url: 224.html
id: 224
categories:
  - Back-end Develop
  - Ruby
date: 2014-08-11 11:36:49
---

### 1\. Overview & Sneak Peek

*   **High-level**, meaning reading and writing Ruby is really easy—it looks a lot like regular English!
*   **Interpreted**, meaning you don't need a compiler to write and run Ruby. You can write it here at Codecademy or even on your own computer (many are shipped with the Ruby interpreter built in—we'll get to the interpreter later in this lesson).
*   **Object-oriented**, meaning it allows users to manipulate data structures called objects in order to build and execute programs. We'll learn more about objects later, but for now, all you need to know is _everything_ in Ruby is an object.
*   **Easy to use**. Ruby was designed by Yukihiro Matsumoto (often just called "Matz") in 1995. Matz set out to design a language that emphasized human needs over those of the computer, which is why Ruby is so easy to pick up.

### 2\. Data Types: Numbers, Strings, Booleans

In Ruby, your information (or data) can come in different types. There are three **data types** in Ruby that we're interested in right now: **numbers**, **booleans** (which can be true or false), and **strings** (words or phrases like`"I'm learning Ruby!"`).

Never use quotation marks (' or ") with booleans, or Ruby will think you're talking about a string (a word or phrase) instead of a value that can be true or false. It's also important to remember that Ruby is case-sensitive (it cares about capitalization).

my_num = 25    # Add your code here!

my_boolean = true     # And here!

my_string = "Ruby"     # Also here.

### 3. Variables

Declaring variables in Ruby is easy: you just write out a name like `my_num`, use `=` to assign it a value, and you're done! If you need to change a variable, no sweat: just type it again and hit `=` to assign it a new value.

my_num = 100

### 4\. Math

Addition (`+`)  
Subtraction (`-`)  
Multiplication (`*`)  
Division (`/`)  
Exponentiation (`**`)  
Modulo (`%`)

### 5.'puts' and 'print'

The `print` command just takes whatever you give it and prints it to the screen. `puts` (for "put string") is slightly different: it adds a new (blank) line after the thing you want it to print. You use them like this:

puts "What's your name?"
print "In Suk Kim"

No parentheses or semicolons needed!

출처 : [http://www.codecademy.com](http://www.codecademy.com) Ruby 강의