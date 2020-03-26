/* Typical comparison function */
const myArray = [1,2,3,4,5,6,7,8,9,10]

const myElement = 6

let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

let binarySearchWithArraySplitting = (array, element, compare = defaultCompare) => {
    // if the array doesn't have any values, return -1.
    if (array.length === 0) { return -1; };

    // middle evaluates to the index of the half the array length, rounded down.
    const middle = Math.floor(array.length / 2);
    // console.log(middle)
    // Use the compare function to evaluate whether or not the element is in the lower half or upper half of array.
    const comparison = compare(element, array[middle]);

    // If 0, return the index of the element.
    if (comparison === 0) { 
        return middle; 
    }

    // Create left and right variables based on the index values of this ternary.
    // If comparison evaluates to -1, return the indexes of the lower half of the array. 
    // If comparison evaluates to 1, return the indexes of the upper half of the array)]
    const [left, right] = comparison === -1 
        ? [0, middle - 1]
        : [middle + 1, array.length];
    console.log(left, middle, right)
    
    // subIndex is the index of the element in the truncated array. 
    const subIndex = binarySearchWithArraySplitting(array.slice(left, right), element, compare);
        
    // This is another ternary.
    // If the subindex === -1, that means the number does not exist.
    // Else return the left + subIndex. 
    // left refers the index of the first pass's middle + 1.
    console.log(left, subIndex, left + subIndex)
    return subIndex === -1 
        ? -1
        : left + subIndex;
}

binarySearchWithArraySplitting(myArray, myElement, defaultCompare)


// // Without all the comments:
// let binarySearchWithArraySplitting = (array, element, compare = defaultCompare) => {
//     if (array.length === 0) { return -1; }
//     const middle = Math.floor(array.length / 2);
//     const comparison = compare(element, array[middle]);

//     if (comparison === 0) { return middle; }

//     const [left, right] = comparison === -1
//         ? [0, middle - 1]
//         : [middle + 1, array.length];

//     const subIndex = binarySearchWithArraySplitting(array.slice(left, right), element, compare);

//     return left + subIndex;
// };