# Scrimba-Binary_Search_Algorithms
Various approaches to binary search algorithm.

### Standard_binary_search takeaways:
1. Works but leaves room for "off by one" errors. 

### Recursion_binary_search takeaways:
1. Using additional parameters can allow your function to be more flexible. 
   - Use default values to increase flexibility. 
2. Make sure recursion block has a condition to prevent infinite looping.
3. When calling a recursive function make sure the arguments/parameters are different and narrowing in each time. 
4. Recursion can be more DRY but sacrifices readability.

### Recursion_tail_binary_search takeaways:
1. The use of the spread operator reduced the need for two arguments to be passed.
2. Tail recursion is one step to get us closer to array splitting.

### ArraySplitting_binary_search takeaways:
1. The array that is passed in each time, is now truncated. It is no longer the full array that we started with.
2. The left and right arguments from before are now 0 and array.length respectively.
3. Using destructuring, "newbounds" now become left and right again.
4. The reason for the subindex is, because the element's index in the original array will change based on each passing of the truncated array, 
5. The BigO(n) is now increased because each time the array is sliced, new memory is utilized.
6. ***Testing with custom array and element did not produce the correct result everytime. There are off by something numbers.***
7.  