---
layout: post
title:  SQRMINSUM - Minimum Sum
categories: ['uncategorized']
code: SQRMINSUM
src: SQRMINSUM.cpp
---

### **Statement**


    Suppose you have a list of integers, and a _move_  is defined as taking one of the integers from the list and replacing it with its square root, rounded down to the nearest integer.
    
    
    
    
    Given an integer l and an integer k, start with the array [1, 2, 3, ..., l] and find the minimal sum of the array after k _moves_.
    
    
    
    
    Example
    
    
    
    
     For l = 5 and k = 2, the output should be  
    squareRoots(l, k) = 10.
    
    
    
    
    We start with [1, 2, 3, 4, 5].  
    After square rooting 5 to get [1, 2, 3, 4, 2] and then square rooting 3 to get[1, 2, 1, 4, 2], we end up with a sum of 10.
    
     _Constraints:_
    
     1 ≤ l ≤ 10<sup>4 </sup>
    
    1 ≤ k ≤ 10<sup>4</sup>
    
    <sup> T=10000</sup>
    
     Input :
    
     The first line contains T the number of test cases followed by 2*T lines containing l and k.
    
     Output:
    
     For every test case, output one line containing an integer, i.e. the minimal possible sum.
    
    Sample Input:
    
    2
    
    5
    
    2
    
    2327
    
    4895
    
      
    
    
    Sample Output:
    
    10
    
    10647



#### **Solution**



