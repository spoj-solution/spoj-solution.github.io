---
layout: post
title:  REDRONESIA - Counting Words
categories: ['uncategorized']
code: REDRONESIA
src: REDRONESIA.cpp
---

### **Statement**

On the islands of Redronesia, there are many languages spoken. Each language
is made up of a number of words. And some of the islands are very particular
about how the words are formed in their language.

Each language specifies how long a word can be, and how many letters there
will be in the alphabet. But they all insist:

  * that each letter in the word must be at least as big as the previous letter
  * that doubles of any letter are allowed, but 3 or more of the same letter are not allowed.

The aim of the problem is to count the number of possible words. Since the
number may be large, please give the answer mod 1000000007.  
  
As an example, on the island of Imosua, they have an alphabet of 4 letters
(we'll call them a, b, c and d), and 6 letters in each word. The following
words are not allowed on Imosua:

  * aabbc (not 6 letters long)
  * aabbab (each letter is not at least as big as the previous letter)
  * aaabbc and aaaabc (triples and longer are not allowed)

Some of the 10 allowable words are:

  * aabbcc
  * aabcdd
  * bbccdd

### Input

The first line of input contains one integer: T the number of test cases.

On each of the next T lines, your are given two integers: S (the length of
each word) and C (the number of characters in the alphabet).

### Output

For each test case, you have to print the number of possible words.

As the result may be a big number, simply output your result modulo 10^9+7

### Example

    
    
    Input:  
     3  
    6 4  
    6 3  
    6 2
    
    
    Output:  
     10  
    1  
    0  
      
    

### Constraints  


1 < T < 100

1 < S, C < 500



#### **Solution**



