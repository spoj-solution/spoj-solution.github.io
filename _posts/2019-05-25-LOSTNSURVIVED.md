---
layout: post
title:  LOSTNSURVIVED - Lost and survived
categories: ['disjoint-set']
code: LOSTNSURVIVED
src: LOSTNSURVIVED.cpp
---

### **Statement**

On September 22,<sup> </sup>2004, Oceanic Flight 815 crashed on a
mysterious island somewhere in the pacific.

There actually were survivors in the crash , N survivors . The mysterious
island kept on moving in space - time, so no rescue reached them.

Initially every survivor was on his own .But soon they realized there are
these “The Others” (Scientists of damn Dharma Initiative) on this Island too.

So to protect themselves from mad Scientists they started uniting into groups
after Dr. Shephard said “ Live together Die alone ”.

You have to handle Q queries; which consist of two survivors becoming friends
and thereby uniting there respective groups into a larger group.

After each query, output the difference between the group of largest size and
group of smallest size at that time.

If there is only one group, output 0. At first, everyone is in their own
group.

Also note, if the two survivors in the query are already in the same group,
print the current answer, and skip merging groups.

Also do comment if you have watched Lost :-p

### Input

The first line consists of two space separated integers, N and Q

The next Q line consists of two integers, A and B, meaning that

the groups involving survivor A and survivor B unite into a larger group.

The first line consists of two space separated integers, N and Q

The next Q line consists of two integers, A and B, meaning that

survivor A and survivor B became friends uniting there groups.

### Output

Output Q lines, the answer after each query.

1<=N<=100000

1<=Q<=100000

### Example

    
    
    Input:
    5 3
    1 2
    2 3
    5 4
    
    
    
    Output:
    1
    2
    1
    



#### **Solution**



