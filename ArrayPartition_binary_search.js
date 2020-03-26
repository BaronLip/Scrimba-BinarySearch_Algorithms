const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myElement = 4

/* Typical comparison function */
let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

let binarySearchWithArraySplitting = (array, element, compare = defaultCompare) => {
    if (array.length === 0) { return -1; }
    const middle = Math.floor(array.length / 2);
    const comparison = compare(element, array.get(middle));

    if (comparison === 0) { return middle; }

    const [left, right] = comparison === -1
        ? [0, middle - 1]
        : [middle + 1, array.length];

    const subIndex = binarySearchWithArraySplitting(array.slice(left, right), element, compare);

    console.log(left + subIndex)
    return subIndex === -1
    ? -1
    : left + subIndex;
};

let ArrayView = (array, start = 0, end = array.length,) => ({
    length: end - start,
    toArray: () => array.slice(array, end),
    slice: (dStart, dEnd) => {
        console.log(dStart,dEnd);
        return ArrayView(array, start + dStart, start + dEnd)
    },
    get: (index) => {
        let realIndex = start + index;
        realIndex < end && realIndex >= start ?
            array[realIndex] :
            undefined
        ;
    }
})

// The ArrayPartition data structure allows for returning the left, right, middle "portions" of the array.
// Pivot refers to the separator/index to divide the array into left, middle and right portions. Middle is just the value at middle instead of a portion.

let ArrayPartition = (array, pivot) => (
    {
        left: () => array.slice(0, pivot),
        middle: () => array.get(pivot),
        right: () => array.slice(pivot + 1, array.length),
    }
)

let binarySearchWithArrayView = (array, ...args) =>
    binarySearchWithArraySplitting(ArrayView(array), ...args);

let binarySearchWithPartition = (array, element, compare = defaultCompare) => {
    console.log(array, element, compare)
    if (array.length === 0) { return -1; }
    const middle = Math.floor(array.length / 2);
    const part = ArrayPartition(array, middle);
    console.log(part)
    const comparison = compare(element, part.middle());

    // This return statement has a nested ternary. 
    return comparison === 0 ?
        array.start + middle :

        binarySearchWithPartition(
            comparison === -1 ? part.left() : part.right(),
        element, defaultCompare);
};

let binarySearchWithPartitionAndView = (array, ...args) => { 
    console.log(array, ...args) // Confirming args are correct. 
    return binarySearchWithPartition(ArrayView(array), ...args)
};

console.log(binarySearchWithPartitionAndView(myArray, myElement, defaultCompare))

