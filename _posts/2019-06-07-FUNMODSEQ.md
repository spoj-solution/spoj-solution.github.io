---
layout: post
title:  FUNMODSEQ - Funny Modular Sequence
categories: ['uncategorized']
code: FUNMODSEQ
src: FUNMODSEQ.cpp
---

### **Statement**

Lets define a funny modular sequence as a sequence such that a<sub>1</sub>
x a<sub>2</sub>=1 (mod p), a<sub>2</sub> x a<sub>3</sub>=1 (mod p)
..., a<sub>n-1</sub> x a<sub>n</sub> = 1 (mod p). Also,
a<sub>1</sub>, a<sub> 2</sub>, a<sub> 3</sub>, ...
a<sub>n</sub> must be less than p and greater than or equal to 0. Given
one element, a<sub>1</sub>, find the sum of the entire funny modular
sequence of length n. If, for any a<sub>i</sub>, where i>=1, there exists
no a<sub>i+1</sub> such that a<sub>i</sub>x a<sub>i+1</sub> = 1
(mod p), output -1.

Note : p is not necessarily prime.

Input:

The first line contains T, the number of test cases.  
T lines follow, each containing a<sub>1</sub>, p, and n.

Output:

For each test case, output one line, the required sum.

Constraints:

1<=T<=10<sup>5</sup>  
1<=a<sub>1</sub><=10<sup>5</sup>  
1<=n<=10<sup>9</sup>  
a<sub>1</sub> < p <=10<sup>9</sup>

Sample Input:

2

2 3 2

3 7 2

Sample Output:

4

8

Explanation

In the first test case, the funny modular sequence will be 2, 2, which has a
sum of 4.

In the second test case, it will be 3, 5, which has a sum of 8.



#### **Solution**



