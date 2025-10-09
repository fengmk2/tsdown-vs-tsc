//#region src/utils.ts
/**
* Add two numbers together
* @param a First number
* @param b Second number
* @returns Sum of a and b
*/
function add(a, b) {
	return a + b;
}
/**
* Multiply two numbers together
* @param a First number
* @param b Second number
* @returns Product of a and b
*/
function multiply(a, b) {
	return a * b;
}
/**
* Greet a person by name
* @param name Person's name
* @returns Greeting message
*/
function greet(name) {
	return `Hello, ${name}!`;
}

//#endregion
export { add, greet, multiply };