/* Typical comparison function */
let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

// Tail recursion
let binarySearchWithTailRecursion = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
	if (left > right) {
		return -1;
	}

	const middle = Math.floor((right + left) / 2);
	const comparison = compare(element, array[middle]);

	// Added new recursion "guard" to check for return of 0.
	if (comparison === 0) {
		return middle;
	}

	// newBounds is the return value of a ternary, it will be an array.
	const newBounds = comparison === -1 ? [ left, middle - 1 ] : [ middle + 1, right ];

	// The spread operator allows passing one argument instead of two, left & right, prior.
	return binarySearchWithRecursion(array, element, compare, ...newBounds);
};
