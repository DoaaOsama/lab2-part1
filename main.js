const operations = require("./Operations/index");
const validate = require("./validators");

// args = process.argv.slice(2);

const args = require("yargs")
  .array("add")
  .array("sub")
  .array("mul")
  .array("div")
  .array("rem").argv;
delete args._;
delete args.$0;

for (var operation in operations) {
  if (args.hasOwnProperty(operation)) {
    const numbers = validate(args[operation]);
    let func = operations[operation];
    console.log(func(...numbers));
  }
}
