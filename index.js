const items = require("./index.json");
const travelplans = require('./tpindex.json');
const fs = require('fs');

function main_item() {
  let count = 1;

  console.log(
    "(name, owner, description, length, width, height, size_unit, weight, weight_unit, pickup_addr, pickup_point, drop_addr, drop_point, contact_name, contact_mobile, total_views, total_notifications, status, is_delete, category)"
  );

  let active = items.active;
  Object.keys(active).map(userId => {
    let listOfItems = active[userId];

    Object.keys(listOfItems).map(itemId => {
      let item = listOfItems[itemId];
      console.log(
        `( "${item.itemInfo.name}", ${userId}, "${
          item.itemInfo.description
        }", ${item.itemInfo.length}, ${item.itemInfo.width}, ${
          item.itemInfo.height
        }, "cm", ${item.itemInfo.weight}, "gm", "${
          item.startLoc
        }", ST_GeomFromText('POINT(${item.startLat} ${item.startLon})'), "${
          item.endLoc
        }", ST_GeomFromText('POINT(${item.endLat} ${item.endLon})'), "${
          item.personName
        }", "${item.personPhone}", ${0}, ${0}, ${1}, ${0}, "${
          item.itemInfo.category
        }" ),`
      );
      count += 1;
    });
  });
}


var verbs =
[   
    ["go to", "goes to", "going to", "went to", "gone to"],
    ["look at", "looks at", "looking at", "looked at", "looked at"],
    ["choose", "chooses", "choosing", "chose", "chosen"]
];
var tenses = 
[
    {name:"Present", singular:1, plural:0, format:"%subject %verb %complement"},
    {name:"Past", singular:3, plural:3, format:"%subject %verb %complement"},
    {name:"Present Continues", singular:2, plural:2, format:"%subject %be %verb %complement"}
];
var subjects =
[
    {name:"I", be:"am", singular:0},
    {name:"You", be:"are", singular:0},
    {name:"He", be:"is", singular:1}
];
var complementsForVerbs =
[
    ["cinema", "Egypt", "home", "concert"],
    ["for a map", "them", "the stars", "the lake"],
    ["a book for reading", "a dvd for tonight"]
]
Array.prototype.random = function(){return this[Math.floor(Math.random() * this.length)];};
    
// About the journey/ Description
function getRString(){
    var index = Math.floor(verbs.length * Math.random());
    var tense = tenses.random();
    var subject = subjects.random();
    var verb = verbs[index];
    var complement = complementsForVerbs[index];
    var str = tense.format;
    str = str.replace("%subject", subject.name).replace("%be", subject.be);
    str = str.replace("%verb", verb[subject.singular ? tense.singular : tense.plural]);
    str = str.replace("%complement", complement.random());
    return str;
}

function getRLat() {
  return (Math.random() * (28.44 - 28.36) + 28.36).toFixed(6);
}

function getRLon() {
  return (Math.random() * (72.38 - 72.72) + 72.72).toFixed(6);
}

function main_travelplans() {

  console.log("about_journey, alert, deleted, end_Addr, end_point, end_time, start_addr, start_point, start_time, estd_travel_distance, estd_travel_time, rtdb_id, status, status_internal, mode_of_travel");

  let active = travelplans.active;
  Object.keys(active).map(userId => {
    let listOfTps = active[userId];

    Object.keys(listOfTps).map(tpId => {
      let tp = listOfTps[tpId];

      console.log(`( "${tp.aboutTheJourney}", 0, 0, "${tp.endLoc}", ST_GeomFromText('POINT(${tp.endLat} ${tp.endLon})'), ${tp.endTime}, "${tp.startLoc}", ST_GeomFromText('POINT(${tp.startLat} ${tp.startLon})'), ${tp.startTime}, 0, 0, "${tpId}", "${tp.status}", 0, "${tp.modeOfTravel}" ),`);

    })
  })
}

function getRandomTuples(len) {

  var res = `INSERT INTO cm_travelplan_poc (about_journey, alert, deleted, end_addr, end_point, end_time, start_addr, start_point, start_time, estd_travel_distance, estd_travel_time, rtdb_id, status, status_internal, mode_of_travel)\nVALUES\n`;

  for(var i=0; i<len; i++) {

    var time = new Date().getTime();

    var rstr = getRString();

    res += `( "${rstr}", 0, 0, "Kanpur|${rstr}", ST_GeomFromText('POINT(${getRLat()} ${getRLon()})'), ${time + 26000}, "Pune|${rstr}", ST_GeomFromText('POINT(${getRLat()} ${getRLon()})'), ${time}, 0, 0, "Kanpur|Pune|${rstr}", "not-finalized", 0, "Road" )`;
    if(i == len-1) {
      res += ";";
    } else {
      res += ",\n";
    }
  }

  fs.writeFile("/Users/titan/temp.txt", res, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
}

//getRandomTuples(1000);
// main_travelplans()
main_item();
