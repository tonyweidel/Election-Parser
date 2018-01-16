const FileReader = require('./FileReader.js');

let FR = new FileReader();
let list = FR.LoadFileIntoArrayByLine('electionSimplified.csv');

let parsedlist = votingParser(list);
