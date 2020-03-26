const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myElement = 6

/* Typical comparison function */
let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

let binarySearchWithArraySplitting = (array, element, compare = defaultCompare) => {
    if (array.length === 0) { return -1; }
    const middle = Math.floor(array.length / 2);
    // Since we wrapped the array with ArrayView, instead of array[middle], we use array.get(middle).
    // .get is a method now available since we wrapped the array with ArrayView.
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
// ArrayView can either be a class or a function that returns an object. This example is a function.
// It wraps around the original array and gives it methods.
// Slice returns a new ArrayView. 
// Slice takes a start and end but since ArrayView also needs the same arguments, dStart and dEnd stand for "delta" start and end.
// ***The delta start and end are offset by the start value of the original ArrayView. (This makes sense but doesn't add up to me.)
// 
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

let binarySearchWithArrayView = (array, ...args) =>
    binarySearchWithArraySplitting(ArrayView(array), ...args)

console.log(binarySearchWithArrayView(myArray, myElement, defaultCompare))