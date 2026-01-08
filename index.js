const userInput = prompt(
  "Please enter a comma-separated list of froyo flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const selectionList = userInput.split(",");

const flavorTally = generateFlavorReport(selectionList);

console.table(flavorTally);

function generateFlavorReport(items) {
  const summary = {};

  for (const choice of items) {
    if (summary[choice]) {
      summary[choice]++;
    } else {
      summary[choice] = 1;
    }
  }

  return summary;
}
