var trainArray = [];

function Train(name, stations) {
  this.name = name;
  this.stations = stations;
  trainArray.push(this);
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);

function displayLines() {
  var trainNames = "";
  for (var i = 0; i < trainArray.length; i++) {
    trainNames += trainArray[i].name + '\n';
  }
  return trainNames.trim();
}

// Prompts
var msg = ("Which train would you like to get on?\n" + displayLines());
var startTrain = prompt(msg);

function inArray(startTrain) {
  var train = trainArray.length;
  for(var i = 0; i < train; i++) {
    if(trainArray[i].name == startTrain)
      return trainArray[i];
  }
}

trainSelected = inArray(startTrain);

function displayStations() {
  var selectedTrainStations = "";
  for (i = 0; i < trainSelected.stations.length; i++) {
    selectedTrainStations += trainSelected.stations[i] + '\n';
  }
  return selectedTrainStations.trim();
}

var msg2 = prompt("Which station would you like to get on?\n" + displayStations());




