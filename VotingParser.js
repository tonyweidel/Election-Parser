function vote(array){
  this.state = arrray[0];
  this.county = array[1];
  this.fips = array[2];
  this.obama = array[3];
  this.obamap = array[4];
  this.romney = array[5];
  this.romneyp = array[6];
}

function parcer(line){
  let array = line.split(",");
  return array;
}
