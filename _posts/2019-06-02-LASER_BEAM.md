---
layout: post
title:  LASER_BEAM - Laser Beam
categories: ['uncategorized']
code: LASER_BEAM
src: LASER_BEAM.cpp
---

### **Statement**

![](../../../content/tjandra:griemp.png)  
_5 × 9 grid without laser beam_ | ![](../../../content/tjandra:grisho.png)  
_5 × 9 grid with laser beam_  
---|---  
  
Jolly Kingdom is threatened by the arrival of an evil witch. In order to
protect the kingdom, the king wants to install some powerful laser beams to
cover some parts of the kingdom. The part that needs to be protected has size
of N × M. To complete this installation, he hired you, as the best engineer he
can find.

Imagine a grid of size N × M, you can choose one node in the grid and shot a
laser beam, the laser can be shot only in diagonal direction as shown in the
picture above, if the laser reach the edge of the grid, it'll bounce to other
diagonal direction, and if the laser reach the corner of the grid, it'll
bounce back. The laser will form a loop track. In order to install the best
security laser beam for the king, you have to compute the number of different
laser track.

### Input

First line consists of an integer T (1 ≤ T ≤ 10<sup>4</sup>) – the number
of test cases. Each of next T lines consists an 2 integers N and M (2 ≤ N, M ≤
10<sup>9</sup>) – the size of the grid.

### Output

For each test case, output an integer – the number of different laser track on
that grid.

### Example

    
    
    Input:  
     9  
    2 2  
    2 3  
    3 3  
    3 5  
    4 4  
    5 5  
    5 9  
    5 123456789  
    123456789 5 
    
    
    Output:  
     2  
    2  
    3  
    3  
    4  
    5  
    5  
    5  
    5

### Explanation

![](../../../content/tjandra:grisho.png)

There are 5 different laser tracks on 5 × 9 grid, shown in the picture above
as black line, blue line, pink line, orange line, and green line.



#### **Solution**



