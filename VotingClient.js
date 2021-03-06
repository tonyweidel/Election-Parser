const FileReader = require('./FileReader.js');
const electionParser = require('./electionParser.js');

let FR = new FileReader();
let list = FR.LoadFileIntoArrayByLine('electionSimplified.csv');

let parsedlist = votingParser(list);

function findCountyAmountExact(list,array){
  let county = list.sort(function(a,b){
    let wordA = a.state.toLowerCase();
    let wordB = b.county.toLowerCase();
    if(county.length==67){
      return state;
    }
  });
}

function findCountyAmountLessThan(list,array){
  let county = list.sort(function(a,b){
    let wordA = a.state.toLowerCase();
    let wordB = b.county.toLowerCase();
    if(county.length<67){
      return state;
    }
  });
}

function findCountyAmountMoreThan(list,array){
  let county = list.sort(function(a,b){
    let wordA = a.state.toLowerCase();
    let wordB = b.county.toLowerCase();
    if(county.length>67){
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
  let percents = [];
  for(let x = 0; x<array.length; x++){
    if(list[x].obamap<40);
    percents.push(list[x].obamap);
  }
  else if (list[x].romneyp<40){
    percents.push(list[x].romneyp);
  }
}

function countyHighs(list){
  let counties = list.sort(function(a,b){
    return (a.obama+a.romney)-(b.obama-b.romney);
  });
}

function coutyWins(list){
  let wins = [];
  let number = list.obama-list.romney;
  for(let x = 0; x<array.length; x++){
    if(number > 0){
      wins.push([list[x].state,list[x].county,list[x].obamaP]);
    }
    else if(number < 0){
      wins.push([list[x].state,list[x].county,list[x].romneyP]);
    }
  }
}

function stateCountyPercentLongshot(list){
  let counties = list.sort(function(a){
    return (a.obamaP-a.romneyP);
  });
  return counties[counties.length-1];
}

function stateCountyPercentVote(list){
  list.sort(function(a,b){return (a.obamaP-a.romneyP)-(b.obamaP-b.romneyP)})
  return list[0]
}

function stateCountyLiteralVote(list){
  list.sort(function(a,b){return (a.obama-a.romney)-(b.obama-b.romney)})
  return list[0]
}
