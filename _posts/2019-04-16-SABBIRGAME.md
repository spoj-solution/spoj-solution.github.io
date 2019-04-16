---
layout: post
title:  SABBIRGAME - Sabbir and Game
categories: ['uncategorized']
code: SABBIRGAME
src: SABBIRGAME.cpp
---

### **Statement**

Sabbir is a little boy. he loves to play. One day his friend taskin suggested
a new interesting game. there are n levels in the game. one should pass all
the levels with a positive life-point. in some level one can increase his
life-point by defeating the villain of the game or lose some life-point when
one can't defeat the villain. Sabbir knows the points he is going to lose or
increase in each level. determine the mnimum life-point sabbir should have
initially ( at the starting of the game ) to pass all the levels with a
positive life point.

### Input

input consists of at most 100 test cases.

first line consists of a single integer T ( 1 <= T <= 100) number of test
cases

each test case is consists of two lines. first line consists of an integer n (
1 <= n <= 1000 )

second line consists of n space separated integer a<sub>1 </sub>,
a<sub>2 </sub>..... a<sub>n-1 </sub>, a<sub>n </sub>(
-10<sup>7</sup><sup> </sup><= a<sub>i </sub><=
10<sup>7</sup><sup> </sup>)<sub> </sub>

### Output

for each test case print an integer in one line , the minimum life-point
sabbir will need initially.

### Example

    
    
    Input:
    3  
     3  
    5 -8 3  
    4  
    1 2 -3 5  
    3  
    1 0 3
    
    
    Output:
    
    
    4  
     1  
    0
    
    
    explanation:
    
    
    first case, if sabbir have 4 life-points at first. sabbir will have 9 points after playing 1st level, he will have 1 point after playing 2nd level, he will have 4 points after playing 3rd level... his points never  becomes less than 1 (remains positive) . if he start with a lower point ( less than 4) initially, he will die at the 2nd level and can't pass all the levels. so, 4 is the minimum ans.



#### **Solution**



