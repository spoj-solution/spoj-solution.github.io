---
layout: post
title:  POLICEMEN - Police Men
categories: ['tree-25']
code: POLICEMEN
src: POLICEMEN.cpp
---

### **Statement**

There is a country of _n_ cities and _n-1_ bidirectional roads you can go from
any city to another using its roads

You are a police man and there is a theif who is going to escape from the
country using an airport in city 1 you are given _m_ queries which of type "
_a b"_ which means the thief is in city _a_ and you are in city _b_ you should
find if it's possible to catch him before he escape or not and find the city
which you will catch him in if it's possible.

You are moving at the same speed the thief moving at and the thief is taking
the shortest path to city 1

If you arrived in a city in the same time as the thief you can catch him in it
if you arrived before him you can wait for him

If there is more than one city you can catch him in print the nearest one to
you.

### Input

the first line contains an integer _n_ ( _1 _≤_ n _≤_ 10<sup>4</sup>_)
then _n-1_ lines each contains two integers which means there is a road
between city _u_ and _v_

then an intger _q_ ( _1 ≤ q _≤_ 10<sup>4</sup>_ ) __ and _q_ lines of form
a b ( _ _1 ≤_ a , b _≤_ n_) which are the thief's position and your position

### Output

for each query print YES then a space then the city which you will catch him
in if it's possible otherwise print NO

### Example

    
    
    Input:
    5  
     1 2  
    1 3  
    2 4  
    4 5  
    4  
    1 2  
    1 1  
    5 4  
    2 3  
     Output:
    NO  
     YES 1  
    YES 4  
    YES 1



#### **Solution**



