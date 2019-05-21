---
layout: post
title:  LOVEBIRDS - She was in Love with BST
categories: ['combinatorics', 'dynamic-programming']
code: LOVEBIRDS
src: LOVEBIRDS.cpp
---

### **Statement**

Devo!  
She has broken up with him
again!![Frown](../../gfx/jscripts/tiny_mce/plugins/emotions/img/smiley-
frown.gif)

And after a series of break ups and patch ups , she is done with him!

Being a geek to keep herself distracted, she picks up her favourite topic of
dynamic programming where she comes across this idiot problem which says

Given a integer N , you have to tell the sum of number of structurally unique
Binary search trees built on different permutations of the set{x , x such that
x belongs to [1,N] and x is an integer}.

A Binary Search tree is said to be built on a permutation iff the inorder
traversal of that BST is same as the permutation.

A permutation is said to be distinct from another if there exists a position i
such that the i th element of both the permutations is different.

Now, her inability to solve the problem is quite stressful to her!  
Help her in Solving the problem!

NOTE: She observes that this number can be very large so output this number
Modulo 1908 .

Morover she tells you that there inorder traversal of a Binary search tree is
Unique.

For Binary Search Tree Read https://en.wikipedia.org/wiki/Binary_search_tree

### Input

The first line of the input consists of T , the number of test cases.

The following T lines consists of a single integer N

(N can be at max 1000 , T can be at max 1000)

### Output

You have to Output T lines each consisting of the answer to the problem Modulo
1908

### Example

    
    
    Input:
    2
    
    
    1
    
    
    2
    
    
    Output:
    1
    
    
    
    2



#### **Solution**



