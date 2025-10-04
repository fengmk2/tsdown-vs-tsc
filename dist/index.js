import "./types.js";
import { add, greet, multiply } from "./utils.js";

//#region src/index.ts
console.log("TypeScript Project with tsdown");
console.log("================================");
console.log("\nMath operations:");
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`4 * 5 = ${multiply(4, 5)}`);
console.log("\nGreeting:");
console.log(greet("World"));
function main() {
	console.log("\nProject built successfully with tsdown!");
}
main();

//#endregion
export { main };