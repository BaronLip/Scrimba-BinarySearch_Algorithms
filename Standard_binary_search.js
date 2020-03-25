/* Typical comparison function */
let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
	// left and right are index values.
	let left = 0;
	let right = array.length - 1;
	// While loop condition, as long as the beggining index is less than ending index...
	while (left <= right) {
		// middle is the index value of the central item in the array. This is not the most accurate since there is rounding occurring.
		let middle = Math.floor((right + left) / 2);

		// The compare function returns 1 if element is larger than the value in the middle, -1 if lessess than, or 0 if not found.
		switch (compare(element, array[middle])) {
			// if element is less than middle value, update the right index to the middle index -1.
			case -1: {
				right = middle - 1;
				break;
			}
			// if element is greater than middle value, update the left index to the middle index + 1
			case 1: {
				left = middle + 1;
				break;
			}
			// When left is no longer less than or greater to right, return middle. Middle is now the index of the element.
			default: {
				return middle;
			}
		}
	}
	// If not found return -1.
	return -1;
};

export default binarySearchWithLoops;
