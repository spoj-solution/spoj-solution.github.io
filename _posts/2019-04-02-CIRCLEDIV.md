---
layout: post
title:  CIRCLEDIV - Euler Puzzle
categories: ['geometry', 'combinatorics']
code: CIRCLEDIV
src: CIRCLEDIV.cpp
---

### **Statement**

Given some set of points on a circle, you connect every pair of them with a
line, find the maximum number of sections do these lines cut the circle into?

[![](https://u.imageresize.org/v2/349cc1af-8f13-4752-834a-dced2570f63c.png)](https://imageresize.org/view/349cc1af-8f13-4752-834a-dced2570f63c)
[![](https://u.imageresize.org/v2/a8ce9558-5e26-4733-a15e-812c0918f1e8.png)](https://imageresize.org/view/a8ce9558-5e26-4733-a15e-812c0918f1e8)

### Input

First line for each testcase file contains T denoting the no. of test queries
followed by T numbers N, denoting the no. of point on a circle.

### Constraints:

1<= T <= 100000 (10<sup>5</sup>)

1<= N <= 100000 (10<sup>5</sup>)

Note: Use fast I/O methods.

### Output

For each test query, ouput the result in given format. As the result can be
large answer the result modulus 1000000007 (10<sup>9</sup> +7).

Case <test_query_i>: <max_section_circle_cuts_into>

### Example

    
    
    Input:
    3  
     1  
    2  
    6
    Output:
    Case 1: 1  
     Case 2: 2  
    Case 3: 31   
    



#### **Solution**



