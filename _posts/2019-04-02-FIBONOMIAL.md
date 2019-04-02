---
layout: post
title:  FIBONOMIAL - Fibonacci Polynomial
categories: ['uncategorized']
code: FIBONOMIAL
src: FIBONOMIAL.cpp
---

### **Statement**

Problem description.

The Fibonacci numbers defined as f(n) = f(n-1) + f(n-2) where f0 = 0
and f1 = 1.

  
We define a function as follows D(n,x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6
+...+f(n)x^n  
  
Given two integers n and x, you need to compute D(n,x) since the output
can be very large output the result modulo 1000000007 (1e9+7).

### Input

Input description.

  * The first line of the input contains an integer T denoting the number of test cases.   
The description of T test cases follows.

  * The first line of each test case contains two integers n and x as described above. 

### Output

Output description.

  * For each test case, output D(n,x)%1000000007 in a seperate line.

### Constraints

Should contain all the constraints on the input data that you may have. Format
it like:

  *1 ≤ T ≤ 1000
  *0 ≤ n ≤ 10^15
  *0 ≤ x ≤ 10^15

### Example

    
    
    Input:
    1 
    7 11
    
    Output:
    268357683
    

### Explanation

D(7,11) = 11 + 11^2 + 2(11^3) + 3(11^4) + 5(11^5) + 8(11^6) + 13(11^7) =
268357683



#### **Solution**



