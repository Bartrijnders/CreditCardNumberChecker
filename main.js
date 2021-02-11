// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
//fuction needed to add up the digits in an array with the reduce method.
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//A function to check if a credit card number is valid.
const validateCred = arr => {
    //copy the given array to make an array to do modifications on;
    let arrCopy = [...arr];
    //boolean to ensure only double every other.
    let doubled = false;
    // begin on the right side of the array and loop through.
    for(let i = arrCopy.length-1; i >= 0; i--){
        // if the value at the current index is to be doubled. double it.
        if(doubled){
            arrCopy[i] = arrCopy[i] * 2;
        }
        //if the value at the current index is larger than 9, subtract 9.
        if(arrCopy[i] > 9){
            arrCopy[i] -= 9;
        }
        //switch the the to be double boolean.
        doubled = !doubled;
    }
    // sum the digits in the array.
    let verifyNum = arr.reduce(reducer);
    // modulo 10 the result from above.
    let verifiedNum = verifyNum % 10;
    // if the result from above is 0 the credit card number is valid. else it's not.
    if(verifiedNum === 0){
        return true;
    }
    else{
        return false;
    }
};

//function to return all invalid credit card numbers.
const findInvalidCards = arr => {
    //an empty array to put the found faulty numbers in.
    let faultyNumbers = [];
    //iterate through the array of credit card numbers.
    for(let i = 0; i < arr.length; i++){
        // check with the validateCred function if the credNum is valid.
        if(!validateCred(arr[i])){
            //if the credNum is not valid. Add the credNum to the faultyNumbers array.
            faultyNumbers.push(arr[i]);
        }
    }
    //return the faultyNumbers array;
    return faultyNumbers;
};

//fucntion that matches the faulty cred numbers with cred card companies.
// starts with 3 => America Express, 4 => Visa, 5 => Mastercard, 6 => Discorver.
// if the number don't start with any number listed above. return 'Company not found'.
const idInvalidCardCompanies = faultyNumbers => {
    //create an  array to store the sorted with the companies already inside.
    let companies = [['AMEX'], ['VISA'], ['MASTERCARD'],['DISCOVER'],['Company Not Found']];
    // iterate through the faulty numbers.
    for(let i = 0; i < faultyNumbers.length; i++){
        // get the first number at the first index from the faulty cred number.
        let startNum = faultyNumbers[i][0];
        //A switch to add the number to ther right array determined by startNum.
        switch(startNum){
            case 3:
                companies[0].push(faultyNumbers[i]);
                break;
            case 4:
                companies[1].push(faultyNumbers[i]);
                break;
            case 5:
                companies[2].push(faultyNumbers[i]);
                break;
            case 6:
                companies[3].push(faultyNumbers[i]);
                break;
            default:
                companies[4].push(faultyNumbers[i]);
            }
        }

        return companies;
};

//print the results of our functions above. to see the results.
console.log(idInvalidCardCompanies(findInvalidCards(batch)));







