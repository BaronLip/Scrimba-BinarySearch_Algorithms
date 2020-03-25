/* Typical comparison function */
let defaultCompare = (a, b) =>
    a > b ? 1 : (a < b ? -1 : 0);

// The function is modified with default parameters. 
// The default parameters aid in the recursive process by defining the comparison parameters.
let binarySearchWithRecursion = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
    // This is the necessary "guard" for recursion so it doesn't do an infinite loop.
    if ( left > right ) { return -1 };
    // middle and comparison are set as const, there is no mutation...
    const middle = Math.floor((right + left) / 2);
    // comparison is will continually evaluate the compare function with new parameters.
    const comparison = compare(element, array[middle]);

    // This return statement is actually a nested ternary expression.
    // As comparison returns -1 (the element's index is less than the middle index), it recursively calls this function with narrowed indexes of the left half of the array.
    // If the comparison returns 1 (element is larger than middle index), it recursively calls with narrowed indexes of the right half of the arry.
    // If compare returns 0 (element is now equal to middle), return the middle index.
    return (
        comparison === -1 ?
            binarySearchWithRecursion(array, element, compare, left, middle - 1)
        : comparison === 1 ?
            binarySearchWithRecursion(array, element, compare, middle + 1, right)
        :
        middle
    );
};


let binarySearchWithRecursion = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
    if (left > right) { return -1 };
    const middle = Math.floor((right + left) / 2);
    const comparison = compare(element, array[middle]);

    return (
        comparison === -1 ?
            binarySearchWithRecursion(array, element, compare, left, middle - 1)
        : comparison === 1 ?
            binarySearchWithRecursion(array, element, compare, middle + 1, right)
        :
        middle
    );
};