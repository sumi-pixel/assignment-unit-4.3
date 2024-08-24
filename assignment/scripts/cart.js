console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []; 
function addItem (item) {
    basket.push(item); 
    return true; 
}

function listItems (basket) {
    for (let i = 0; i < basket.length; i++) {
console.log(basket[i]);
    }
}

function empty (basket) {
while (basket.length > 0) {
    basket.pop();
}
}
// example 
console.log(`Basket is ${basket}`);
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log(`Basket is now ${basket}`);

const maxItems = 5; 
// create a function called isFull
function isFull (basket) {
return basket.length >= maxItems; 
}

// update the addItem function 
function addItem (basket, item) {
if (isFull (basket)) {
    return false ; 
    
} else {
    basket.push(item);
    return true; 
}
}

function removeItem(item) {
}
basket = ["grapes","banana", "watermelon", "blackberry"]; 
// find the index of the first matching item 
let index = basket.indexOf(item); 
// if the index is found, remove it using splice and return the item 
if ( index !== -1) {
    return basket.splice(index, 1)[0];
}
// if item is not found, return null 
return null; 

// example 
console.log(removeItem("grapes")); // output: "grapes"
console.log(removeItem("apple")); // output: "null"
// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
