"use strict";
let personNameWithWhitespace = "\t  Fatima \n   ";
console.log("Name with whitespace:");
console.log("{" + personNameWithWhitespace + "}");
let personNameStripped = personNameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log("{" + personNameStripped + "}");
