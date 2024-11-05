// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/"); // Find the index of the last '/' character
const base = filePath.slice(lastSlashIndex + 1); // Get the part after the last '/' character
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable

const dir = filePath.slice(0, lastSlashIndex); // Get the part from the beginning to the last '/' character

// Create a variable to store the ext part of the variable

const extIndex = base.lastIndexOf("."); // Find the index of the last '.' character
const ext = base.slice(extIndex); // Get the extension (including the dot)

console.log(`The directory part of ${filePath} is ${dir}`);
console.log(`The extension part of ${filePath} is ${ext}`);

