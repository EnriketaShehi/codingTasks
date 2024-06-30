// define an array of strings containing ten words
// three of the words have six letters
const wordsArray = ['Basic','Fortran','Java','Lisp','Matlab','Pascal','PHP','Python','Ruby','SQL'];

// define the higher order filter function 'myFilterFunction'
// 'myFilterFunction' takes an array 'inputArray' and a callback function 'callback' as arguments
function myFilterFunction(inputArray, callback) {

    // initialise an array 'outputArray' to store the results of filtering the input array
    const outputArray = [];

    // 'for' loop to loop through the input array
    for (let i = 0; i < inputArray.length; i++) {

        // use the callback function to filter the input array
        // the callback function returns 'true' for strings which match the filter criterion
         if (callback(inputArray[i], i, inputArray)) {

            // push items filtered by the callback function from the input array into the output array
            outputArray.push(inputArray[i]);
         }
    }

    // return the output array
    return outputArray;
};

// the required input array and callback function are passed to 'myFilterFunction'
// the callback function returns true for strings in the array which have six letters
// the filtered array is logged to the console
console.log(myFilterFunction(wordsArray, (word) => word.length == 6));

// output:
// The output array is:
// [Matlab Pascal Python]