//#region src/utils.d.ts
/**
 * Add two numbers together
 * @param a First number
 * @param b Second number
 * @returns Sum of a and b
 */
declare function add(a: number, b: number): number;
/**
 * Multiply two numbers together
 * @param a First number
 * @param b Second number
 * @returns Product of a and b
 */
declare function multiply(a: number, b: number): number;
/**
 * Greet a person by name
 * @param name Person's name
 * @returns Greeting message
 */
declare function greet(name: string): string;
//#endregion
export { add, greet, multiply };