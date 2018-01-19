const FileReader = require('./FileReader.js');

let FR = new FileReader();
let list = FR.LoadFileIntoArrayByLine('electionSimplified.csv');

let parsedlist = votingParser(list);

//
function findCountyAmount(list,array){
  let county = list.sort(function(a,b){
    let wordA = a.state.toLowerCase();
    let wordB = b.county.toLowerCase();
    if(county.length==67){
      return state;
    }
  });
}

function findStates(list){
  let state = []
  for(let x = 0; x<array.length; x++){
    if(list[x].fips == 0);
      state.push(list[x].state);
  }
}

function percentLows(list){
  let percents = []
  for(let x = 0; x<array.length; x++){
    if(list[x].obamap<40);
    percents.push(list[x].obamap);
  }
  else if (list[x].romneyp<40){}
    percents.push(list[x].romneyp);
  }
}

function countyHighs(list){
  let counties = list.sort(function(a,b){
    return (a.obama+a.romney)-(b.obama-b.romney);
  });
}

function coutyWins(list){

}

function stateCountyPercentLongshot(list){

}

function stateCountyPercentVote(list){

}
