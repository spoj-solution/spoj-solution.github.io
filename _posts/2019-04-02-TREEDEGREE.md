---
layout: post
title:  TREEDEGREE - Degree of a Tree
categories: ['tree', 'datastructures']
code: TREEDEGREE
src: TREEDEGREE.cpp
---

### **Statement**

mrm_196 always represents the rooted trees in a simple array, but the array
holds four conditions:

  1. If the tree has N vertices, the array has length 2N.
  2. Each vertex has a number (from 1 to N) which is written twice (but they may not be necessarily beside each other).
  3. Between the numbers of each vertex, the numbers on its subtree are written.
  4. Vertex 1 is always the root of the tree.

For example, he may store the following tree in one of these six ways:

![Sample Tree](https://image.ibb.co/njpaCv/tree.jpg)

Tree = {1, 3, 2, 2, 4, 4, 5, 5, 3, 1}

Tree = {1, 3, 4, 4, 2, 2, 5, 5, 3, 1}

Tree = {1, 3, 5, 5, 4, 4, 2, 2, 3, 1}

Tree = {1, 3, 2, 2, 5, 5, 4, 4, 3, 1}

Tree = {1, 3, 4, 4, 5, 5, 2, 2, 3, 1}

Tree = {1, 3, 5, 5, 2, 2, 4, 4, 3, 1}

Your task is pretty simple, find what he always wanted, THE DEGREE OF THE
TREE!!!!

Degree of a tree is the maximum degree of all its vertices.

### Input

The first line of the input contains an integer _T_ (1 ≤ _T_ ≤ 20) — the
number tests to answer.

The first line of each test contains an integer _N_ (1 ≤ _N_ ≤ 100 000) — the
number of vertices in the tree.

The second line of each test contains 2 _N_ integers _a_ <sub>1</sub>, _a_
<sub>2</sub>, ..., _a<sub>2N</sub>_ (1 ≤ _a<sub>i</sub>_ ≤ _N_ ) —
the elements of his array.

It’s guaranteed that the given array always forms at least one valid tree.

### Output

For each test, print a single integer in one line — the degree of the tree.

### Example

    
    
    Input:
    2
    1
    1 1
    5
    1 3 2 2 4 4 5 5 3 1
    
    Output:
    0
    4
    

Warning: large Input/Output data, be careful with certain languages

![](file:///C:/Users/MOHAMA~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)



#### **Solution**



