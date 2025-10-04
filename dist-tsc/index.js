import "./types.js";
import { add, multiply, greet } from "./utils.js";
console.log('TypeScript Project with tsdown');
console.log('================================');
// Test the utility functions
console.log('\nMath operations:');
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`4 * 5 = ${multiply(4, 5)}`);
console.log('\nGreeting:');
console.log(greet('World'));
// Export the main function
export function main() {
    console.log('\nProject built successfully with tsdown!');
}
main();
